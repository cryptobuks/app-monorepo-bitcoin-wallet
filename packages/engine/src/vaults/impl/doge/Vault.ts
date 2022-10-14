/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/require-await */

import { decrypt } from '@onekeyfe/blockchain-libs/dist/secret/encryptors/aes256';
import { TransactionStatus } from '@onekeyfe/blockchain-libs/dist/types/provider';
import BigNumber from 'bignumber.js';
import bs58check from 'bs58check';
// @ts-expect-error
import coinSelect from 'coinselect';
// @ts-expect-error
import coinSelectSplit from 'coinselect/split';
import memoizee from 'memoizee';

import debugLogger from '@onekeyhq/shared/src/logger/debugLogger';

import { ExportedPrivateKeyCredential } from '../../../dbs/base';
import {
  InsufficientBalance,
  NotImplemented,
  OneKeyInternalError,
} from '../../../errors';
import { DBUTXOAccount } from '../../../types/account';
import {
  IApproveInfo,
  IDecodedTx,
  IDecodedTxActionNativeTransfer,
  IDecodedTxActionType,
  IDecodedTxDirection,
  IDecodedTxLegacy,
  IDecodedTxStatus,
  IEncodedTx,
  IEncodedTxUpdateOptions,
  IFeeInfo,
  IFeeInfoUnit,
  ISignedTx,
  ITransferInfo,
  IUnsignedTxPro,
} from '../../types';
import { VaultBase } from '../../VaultBase';
import { EVMDecodedTxType } from '../evm/decoder/types';

import { Provider } from './btcForkChainUtils/provider';
import {
  AddressEncodings,
  IEncodedTxBtc,
  IUTXOInput,
  IUTXOOutput,
  TxInput,
} from './btcForkChainUtils/types';
import { KeyringHardware } from './KeyringHardware';
import { KeyringHd } from './KeyringHd';
import { KeyringImported } from './KeyringImported';
import { KeyringWatching } from './KeyringWatching';
import settings from './settings';

const DEFAULT_BLOCK_NUMS = [10, 5, 2];
const DEFAULT_BLOCK_TIME = 60;

// @ts-ignore
export default class Vault extends VaultBase {
  keyringMap = {
    hd: KeyringHd,
    hw: KeyringHardware,
    imported: KeyringImported,
    watching: KeyringWatching,
    external: KeyringWatching,
  };

  settings = settings;

  override validateImportedCredential(input: string): Promise<boolean> {
    let ret = false;
    try {
      ret =
        this.settings.importedAccountEnabled &&
        /^[d]gpv/.test(input) &&
        (this.engineProvider as unknown as Provider).isValidXprv(input);
    } catch {
      // pass
    }
    return Promise.resolve(ret);
  }

  override validateWatchingCredential(input: string): Promise<boolean> {
    let ret = false;
    try {
      ret =
        this.settings.watchingAccountEnabled &&
        /^[d]gub/.test(input) &&
        (this.engineProvider as unknown as Provider).isValidXpub(input);
    } catch {
      // ignore
    }
    return Promise.resolve(ret);
  }

  override async checkAccountExistence(
    accountIdOnNetwork: string,
  ): Promise<boolean> {
    let accountIsPresent = false;
    try {
      const provider = this.engineProvider as unknown as Provider;
      const { txs } = (await provider.getAccount({
        type: 'simple',
        xpub: accountIdOnNetwork,
      })) as {
        txs: number;
      };
      accountIsPresent = txs > 0;
    } catch (e) {
      console.error(e);
    }
    return Promise.resolve(accountIsPresent);
  }

  override async getAccountBalance(tokenIds: Array<string>, withMain = true) {
    // No token support on BTC.
    const ret = tokenIds.map((id) => undefined);
    if (!withMain) {
      return ret;
    }
    const { xpub } = (await this.getDbAccount()) as DBUTXOAccount;
    if (!xpub) {
      return [new BigNumber('0'), ...ret];
    }
    const [mainBalance] = await this.getBalances([{ address: xpub }]);
    return [mainBalance].concat(ret);
  }

  override getBalances(
    requests: { address: string; tokenAddress?: string | undefined }[],
  ): Promise<(BigNumber | undefined)[]> {
    return (this.engineProvider as unknown as Provider).getBalances(requests);
  }

  async getExportedCredential(password: string): Promise<string> {
    const dbAccount = (await this.getDbAccount()) as DBUTXOAccount;

    if (dbAccount.id.startsWith('hd-')) {
      const purpose = parseInt(dbAccount.path.split('/')[1]);
      const addressEncoding = AddressEncodings.P2PKH;
      const { network } = this.engineProvider as unknown as Provider;
      const { private: xprvVersionBytes } = network.bip32;

      const keyring = this.keyring as KeyringHd;
      const [encryptedPrivateKey] = Object.values(
        await keyring.getPrivateKeys(password),
      );
      return bs58check.encode(
        bs58check
          .decode(dbAccount.xpub)
          .fill(
            Buffer.from(xprvVersionBytes.toString(16).padStart(8, '0'), 'hex'),
            0,
            4,
          )
          .fill(
            Buffer.concat([
              Buffer.from([0]),
              decrypt(password, encryptedPrivateKey),
            ]),
            45,
            78,
          ),
      );
    }

    if (dbAccount.id.startsWith('imported-')) {
      // Imported accounts, crendetial is already xprv
      const { privateKey } = (await this.engine.dbApi.getCredential(
        this.accountId,
        password,
      )) as ExportedPrivateKeyCredential;
      if (typeof privateKey === 'undefined') {
        throw new OneKeyInternalError('Unable to get credential.');
      }
      return bs58check.encode(decrypt(password, privateKey));
    }

    throw new OneKeyInternalError(
      'Only credential of HD or imported accounts can be exported',
    );
  }

  attachFeeInfoToEncodedTx(params: {
    encodedTx: IEncodedTxBtc;
    feeInfoValue: IFeeInfoUnit;
  }): Promise<IEncodedTxBtc> {
    const feeRate = params.feeInfoValue.price;
    if (typeof feeRate === 'string') {
      return this.buildEncodedTxFromTransfer(
        params.encodedTx.transferInfo,
        feeRate,
      );
    }
    return Promise.resolve(params.encodedTx);
  }

  decodedTxToLegacy(decodedTx: IDecodedTx): Promise<IDecodedTxLegacy> {
    const { type, nativeTransfer } = decodedTx.actions[0];
    if (
      type !== IDecodedTxActionType.NATIVE_TRANSFER ||
      typeof nativeTransfer === 'undefined'
    ) {
      // shouldn't happen.
      throw new OneKeyInternalError('Incorrect decodedTx.');
    }
    return Promise.resolve({
      txType: EVMDecodedTxType.NATIVE_TRANSFER,
      symbol: 'UNKNOWN',
      amount: nativeTransfer.amount,
      value: nativeTransfer.amountValue,
      fromAddress: nativeTransfer.from,
      toAddress: nativeTransfer.to,
      data: '',
      totalFeeInNative: decodedTx.totalFeeInNative,
      total: BigNumber.sum
        .apply(
          null,
          (nativeTransfer.utxoFrom || []).map(
            ({ balanceValue }) => balanceValue,
          ),
        )
        .toFixed(),
    } as IDecodedTxLegacy);
  }

  async decodeTx(encodedTx: IEncodedTxBtc, payload?: any): Promise<IDecodedTx> {
    const { inputs, outputs } = encodedTx;
    const network = await this.engine.getNetwork(this.networkId);
    const dbAccount = (await this.getDbAccount()) as DBUTXOAccount;
    const token = await this.engine.getNativeTokenInfo(this.networkId);
    const nativeTransfer: IDecodedTxActionNativeTransfer = {
      tokenInfo: token,
      utxoFrom: inputs.map((input) => ({
        address: input.address,
        balance: new BigNumber(input.value)
          .shiftedBy(-network.decimals)
          .toFixed(),
        balanceValue: input.value,
        symbol: network.symbol,
        isMine: true,
      })),
      utxoTo: outputs.map((output) => ({
        address: output.address,
        balance: new BigNumber(output.value)
          .shiftedBy(-network.decimals)
          .toFixed(),
        balanceValue: output.value,
        symbol: network.symbol,
        isMine: output.address === dbAccount.address,
      })),
      from: dbAccount.address,
      to: outputs[0].address,
      amount: new BigNumber(outputs[0].value)
        .shiftedBy(-network.decimals)
        .toFixed(),
      amountValue: outputs[0].value,
      extraInfo: null,
    };
    return {
      txid: '',
      owner: dbAccount.address,
      signer: dbAccount.address,
      nonce: 0,
      actions: [
        {
          type: IDecodedTxActionType.NATIVE_TRANSFER,
          direction:
            outputs[0].address === dbAccount.address
              ? IDecodedTxDirection.OUT
              : IDecodedTxDirection.SELF,
          nativeTransfer,
        },
      ],
      status: IDecodedTxStatus.Pending,
      networkId: this.networkId,
      accountId: this.accountId,
      extraInfo: null,
      totalFeeInNative: encodedTx.totalFeeInNative,
    };
  }

  async buildEncodedTxFromTransfer(
    transferInfo: ITransferInfo,
    specifiedFeeRate?: string,
  ): Promise<IEncodedTxBtc> {
    const { to, amount } = transferInfo;
    const network = await this.engine.getNetwork(this.networkId);
    const dbAccount = (await this.getDbAccount()) as DBUTXOAccount;
    const utxos = await this.collectUTXOs();
    // Select the slowest fee rate as default, otherwise the UTXO selection
    // would be failed.
    // SpecifiedFeeRate is from UI layer and is in BTC/byte, convert it to sats/byte
    const feeRate =
      typeof specifiedFeeRate !== 'undefined'
        ? new BigNumber(specifiedFeeRate)
            .shiftedBy(network.feeDecimals)
            .toFixed()
        : (await this.getFeeRate())[0];
    const max = utxos
      .reduce((v, { value }) => v.plus(value), new BigNumber('0'))
      .shiftedBy(-network.decimals)
      .lte(amount);

    const unspentSelectFn = max ? coinSelectSplit : coinSelect;
    const {
      inputs,
      outputs,
      fee,
    }: {
      inputs: IUTXOInput[];
      outputs: IUTXOOutput[];
      fee: number;
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    } = unspentSelectFn(
      utxos.map(({ txid, vout, value, address, path }) => ({
        txId: txid,
        vout,
        value: parseInt(value),
        address,
        path,
      })),
      [
        max
          ? { address: to }
          : {
              address: to,
              value: parseInt(
                new BigNumber(amount).shiftedBy(network.decimals).toFixed(),
              ),
            },
      ],
      parseInt(feeRate),
    );

    if (!inputs || !outputs) {
      throw new InsufficientBalance('Failed to select UTXOs');
    }
    const totalFee = fee.toString();
    const totalFeeInNative = new BigNumber(totalFee)
      .shiftedBy(-1 * network.feeDecimals)
      .toFixed();
    return {
      inputs: inputs.map(({ txId, value, ...keep }) => ({
        ...keep,
        txid: txId,
        value: value.toString(),
      })),
      outputs: outputs.map(({ value, address }) => ({
        address: address || dbAccount.address, // change amount
        value: value.toString(),
      })),
      totalFee,
      totalFeeInNative,
      transferInfo,
    };
  }

  // buildEncodedTxFromApprove(approveInfo: IApproveInfo): Promise<any> {
  //   throw new NotImplemented();
  // }

  // updateEncodedTxTokenApprove(
  //   encodedTx: IEncodedTx,
  //   amount: string,
  // ): Promise<IEncodedTx> {
  //   throw new NotImplemented();
  // }

  updateEncodedTx(
    encodedTx: IEncodedTx,
    payload: any,
    options: IEncodedTxUpdateOptions,
  ): Promise<IEncodedTx> {
    return Promise.resolve(encodedTx);
  }

  buildUnsignedTxFromEncodedTx(
    encodedTx: IEncodedTxBtc,
  ): Promise<IUnsignedTxPro> {
    const { inputs, outputs } = encodedTx;

    const inputsInUnsignedTx: TxInput[] = [];
    for (const input of inputs) {
      const value = new BigNumber(input.value);
      inputsInUnsignedTx.push({
        address: input.address,
        value,
        utxo: { txid: input.txid, vout: input.vout, value },
      });
    }
    const outputsInUnsignedTx = outputs.map(({ address, value }) => ({
      address,
      value: new BigNumber(value),
    }));

    const ret = {
      inputs: inputsInUnsignedTx,
      outputs: outputsInUnsignedTx,
      payload: {},
      encodedTx,
    };

    return Promise.resolve(ret);
  }

  async fetchFeeInfo(encodedTx: IEncodedTxBtc): Promise<IFeeInfo> {
    const network = await this.engine.getNetwork(this.networkId);
    const { feeLimit } = await this.engine.providerManager.buildUnsignedTx(
      this.networkId,
      {
        ...(await this.buildUnsignedTxFromEncodedTx(encodedTx)),
        feePricePerUnit: new BigNumber(1),
      },
    );
    // Prices are in sats/byte, convert it to BTC/byte for UI.
    const prices = (await this.getFeeRate()).map((price) =>
      new BigNumber(price).shiftedBy(-network.feeDecimals).toFixed(),
    );
    return {
      customDisabled: true,
      limit: (feeLimit ?? new BigNumber(0)).toFixed(), // bytes in BTC
      prices,
      waitingSeconds: DEFAULT_BLOCK_NUMS.map(
        (numOfBlocks) => numOfBlocks * DEFAULT_BLOCK_TIME,
      ),
      defaultPresetIndex: '1',
      feeSymbol: 'BTC',
      feeDecimals: network.feeDecimals,
      nativeSymbol: network.symbol,
      nativeDecimals: network.decimals,
      tx: null, // Must be null if network not support feeInTx
    };
  }

  override async broadcastTransaction(signedTx: ISignedTx): Promise<ISignedTx> {
    debugLogger.engine.info('broadcastTransaction START:', {
      rawTx: signedTx.rawTx,
    });
    const txid = await (
      this.engineProvider as unknown as Provider
    ).broadcastTransaction(signedTx.rawTx);
    debugLogger.engine.info('broadcastTransaction END:', {
      txid,
      rawTx: signedTx.rawTx,
    });
    return {
      ...signedTx,
      txid,
    };
  }

  override getTransactionStatuses(
    txids: string[],
  ): Promise<(TransactionStatus | undefined)[]> {
    return (this.engineProvider as unknown as Provider).getTransactionStatuses(
      txids,
    );
  }

  collectUTXOs = memoizee(
    async () => {
      const dbAccount = (await this.getDbAccount()) as DBUTXOAccount;
      try {
        return await (this.engineProvider as unknown as Provider).getUTXOs(
          dbAccount.xpub,
        );
      } catch (e) {
        console.error(e);
        throw new OneKeyInternalError('Failed to get UTXOs of the account.');
      }
    },
    {
      promise: true,
      max: 1,
      maxAge: 1000 * 30,
    },
  );

  private getFeeRate = memoizee(
    async () => {
      const client = await (this.engineProvider as unknown as Provider)
        .blockbook;
      try {
        return await Promise.all(
          DEFAULT_BLOCK_NUMS.map((blockNum) =>
            client
              .estimateFee(blockNum)
              .then((feeRate) => new BigNumber(feeRate).toFixed(0)),
          ),
        );
      } catch (e) {
        console.error(e);
        throw new OneKeyInternalError('Failed to get fee rates.');
      }
    },
    {
      promise: true,
      max: 1,
      maxAge: 1000 * 30,
    },
  );
}