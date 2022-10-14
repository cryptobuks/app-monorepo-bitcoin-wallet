/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import axios, { AxiosInstance } from 'axios';
import BigNumber from 'bignumber.js';

import type { ChainInfo, IBtcUTXO } from './types';

const BTC_PER_KBYTES_TO_SAT_PER_BYTE = 10 ** 5;

class BlockBook {
  readonly request: AxiosInstance;

  constructor(url: string) {
    this.request = axios.create({});
  }

  setChainInfo() {}

  async estimateFee(waitingBlock: number): Promise<number> {
    const resp = await this.request
      .get(`/api/v2/estimatefee/${waitingBlock}`)
      .then((res) => res.data)
      .catch((reason) => {
        console.debug('Error when estimating fee', reason);
        return { result: '0' };
      });

    return Number(resp.result || 0) * BTC_PER_KBYTES_TO_SAT_PER_BYTE;
  }

  getAccount(xpub: string, params: Record<string, any>): Promise<any> {
    return this.request
      .get(`/api/v2/xpub/${xpub}`, { params })
      .then((i: any) => i.data);
  }

  getBalance(address: string): Promise<BigNumber> {
    return this.request
      .get(`/api/v2/xpub/${address}`, {
        params: { details: 'basic' },
      })
      .then((response) => {
        const { data } = response;
        const balance = new BigNumber(data.balance);
        const unconfirmedBalance = new BigNumber(data.unconfirmedBalance);
        return !unconfirmedBalance.isNaN() && !unconfirmedBalance.isZero()
          ? balance.plus(unconfirmedBalance)
          : balance;
      });
  }

  getUTXOs(xpub: string) {
    return this.request
      .get(`/api/v2/utxo/${xpub}`)
      .then((res) => res.data as unknown as Array<IBtcUTXO>);
  }

  async getRawTransaction(txid: string): Promise<string> {
    const resp = await this.request
      .get(`/api/v2/tx/${txid}`)
      .then((i) => i.data);

    return resp.hex;
  }

  async broadcastTransaction(rawTx: string): Promise<string> {
    try {
      const res = await this.request
        .get(`/api/v2/sendtx/${rawTx}`)
        .then((i) => i.data);

      return res.result;
    } catch (e: any) {
      if (
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        e.response?.data?.error?.includes?.(
          'transaction already in block chain',
        )
      ) {
        throw new Error('Transaction already in block');
      }

      throw e;
    }
  }
}

const getBlockBook = (chainInfo: ChainInfo) =>
  Promise.resolve(new BlockBook(chainInfo.clients[0].name));

export { BlockBook, getBlockBook };
