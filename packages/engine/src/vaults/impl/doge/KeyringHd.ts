import { batchGetPublicKeys } from '@onekeyfe/blockchain-libs/dist/secret';
import bs58check from 'bs58check';

import { COINTYPE_DOGE as COIN_TYPE } from '../../../constants';
import { ExportedSeedCredential } from '../../../dbs/base';
import { OneKeyInternalError } from '../../../errors';
import { AccountType, DBUTXOAccount } from '../../../types/account';
import { KeyringHdBase } from '../../keyring/KeyringHdBase';
import { IPrepareSoftwareAccountsParams } from '../../types';

import { Provider } from './btcForkChainUtils/provider';
import { AddressEncodings } from './btcForkChainUtils/types';

const DEFAULT_PURPOSE = 44;
const COIN_NAME = 'DOGE';

// @ts-ignore
export class KeyringHd extends KeyringHdBase {
  override async prepareAccounts(
    params: IPrepareSoftwareAccountsParams,
  ): Promise<DBUTXOAccount[]> {
    const { password, indexes, purpose, names } = params;
    console.log('Doge prepareAccounts!');

    const usedPurpose = purpose || DEFAULT_PURPOSE;
    const ignoreFirst = indexes[0] !== 0;
    const usedIndexes = [...(ignoreFirst ? [indexes[0] - 1] : []), ...indexes];
    const { seed } = (await this.engine.dbApi.getCredential(
      this.walletId,
      password,
    )) as ExportedSeedCredential;
    const provider = (await this.engine.providerManager.getProvider(
      this.networkId,
    )) as unknown as Provider;
    const { network } = provider;
    const pubkeyInfos = batchGetPublicKeys(
      'secp256k1',
      seed,
      password,
      `m/${usedPurpose}'/${COIN_TYPE}'`,
      usedIndexes.map((index) => `${index.toString()}'`),
    );
    if (pubkeyInfos.length !== usedIndexes.length) {
      throw new OneKeyInternalError('Unable to get publick key.');
    }

    const { public: xpubVersionBytes } = network.bip32;

    const ret = [];
    let index = 0;
    for (const { path, parentFingerPrint, extendedKey } of pubkeyInfos) {
      const xpub = bs58check.encode(
        Buffer.concat([
          Buffer.from(xpubVersionBytes.toString(16).padStart(8, '0'), 'hex'),
          Buffer.from([3]),
          parentFingerPrint,
          Buffer.from(
            (usedIndexes[index] + 2 ** 31).toString(16).padStart(8, '0'),
            'hex',
          ),
          extendedKey.chainCode,
          extendedKey.key,
        ]),
      );
      const firstAddressRelPath = '0/0';
      const { [firstAddressRelPath]: address } = provider.xpubToAddresses(
        xpub,
        [firstAddressRelPath],
      );
      const name =
        (names || [])[index - (ignoreFirst ? 1 : 0)] ||
        `${COIN_NAME} #${usedIndexes[index] + 1}`;
      if (!ignoreFirst || index > 0) {
        ret.push({
          id: `${this.walletId}--${path}`,
          name,
          type: AccountType.UTXO,
          path,
          coinType: COIN_TYPE,
          xpub,
          address,
          addresses: { [firstAddressRelPath]: address },
        });
      }

      if (usedIndexes.length === 1) {
        // Only getting the first account, ignore balance checking.
        break;
      }

      const { txs } = (await provider.getAccount(
        { type: 'simple', xpub },
        AddressEncodings.P2PKH,
      )) as { txs: number };
      if (txs > 0) {
        index += 1;
        // blockbook API rate limit.
        await new Promise((r) => setTimeout(r, 200));
      } else {
        // Software should prevent a creation of an account
        // if a previous account does not have a transaction history (meaning none of its addresses have been used before).
        // https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki
        break;
      }
    }
    return ret;
  }
}
