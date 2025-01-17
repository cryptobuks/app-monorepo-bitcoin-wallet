import { defaultAbiCoder } from '@ethersproject/abi';
import axios from 'axios';

import type {
  Collection,
  NFTAsset,
  NFTServiceResp,
  NFTTransaction,
} from '@onekeyhq/engine/src/types/nft';
import { NFTChainMap, NFTSymbolMap } from '@onekeyhq/engine/src/types/nft';
import backgroundApiProxy from '@onekeyhq/kit/src/background/instance/backgroundApiProxy';
import { OnekeyNetwork } from '@onekeyhq/shared/src/config/networkIds';

import simpleDb from '../dbs/simple/simpleDb';
import { getFiatEndpoint } from '../endpoint';
import {
  Erc1155MethodSelectors,
  Erc721MethodSelectors,
} from '../vaults/impl/evm/decoder/abi';
import { IDecodedTxActionType, IDecodedTxDirection } from '../vaults/types';

export function getNFTListKey(accountId: string, networkId: string) {
  return `${accountId.toLowerCase()}-${networkId}`.toLowerCase();
}

export const isCollectibleSupportedChainId = (networkId?: string) => {
  if (!networkId) return false;
  if (NFTChainMap[networkId]) return true;
  return false;
};

export function getImageWithAsset(asset: NFTAsset) {
  const { nftscanUri, imageUri, contentType, contentUri } = asset;
  if (nftscanUri) {
    return nftscanUri;
  }
  if (imageUri) {
    if (
      (contentType?.startsWith('image') ||
        contentType?.startsWith('unknown')) &&
      !imageUri.endsWith('.mp4') &&
      !imageUri.endsWith('.mp3')
    ) {
      return imageUri;
    }
  }
  if (contentUri && imageUri && imageUri !== contentUri) {
    return imageUri;
  }
}

const SVGContracts = ['0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85'];

export function isSVGContract(contractAddress?: string) {
  return SVGContracts.includes(contractAddress ?? '');
}

export function getHttpImageWithAsset(asset: NFTAsset) {
  const { imageUri, nftscanUri } = asset;
  if (nftscanUri) {
    return nftscanUri;
  }
  if (imageUri) {
    if (
      imageUri.toLowerCase().startsWith('qm') ||
      imageUri.toLowerCase().startsWith('ba')
    ) {
      return `https://cloudflare-ipfs.com/ipfs/${imageUri}`;
    }
    if (imageUri.startsWith('ar://')) {
      return `https://arweave.net/${imageUri.replace('ar://', '')}`;
    }
    return imageUri;
  }
}

export function getContentWithAsset(asset: NFTAsset) {
  const { contentUri } = asset;
  if (contentUri) {
    if (
      contentUri.toLowerCase().startsWith('qm') ||
      contentUri.toLowerCase().startsWith('ba')
    ) {
      return `https://cloudflare-ipfs.com/ipfs/${contentUri}`;
    }
    if (contentUri.startsWith('ipfs://')) {
      return contentUri.replace('ipfs://', 'https://cloudflare-ipfs.com/ipfs/');
    }
    if (contentUri.startsWith('ar://')) {
      return `https://arweave.net/${contentUri.replace('ar://', '')}`;
    }
    if (contentUri.startsWith('<svg')) {
      const base64Svg = Buffer.from(contentUri, 'utf-8').toString('base64');
      return `data:image/svg+xml;base64,${base64Svg}`;
    }
    return contentUri;
  }
}

export const syncImage = async (params: {
  contractAddress?: string;
  tokenId: string;
  imageURI?: string;
}) => {
  const { imageURI } = params;
  if (!imageURI) return false;
  const endpoint = getFiatEndpoint();
  const apiUrl = `${endpoint}/NFT/sync`;
  const data = await axios
    .post(apiUrl, params, { timeout: 3 * 60 * 1000 })
    .then(() => true)
    .catch(() => false);
  return data;
};

export const getNFTSymbolPrice = async (networkId: string) => {
  const tokenId = NFTSymbolMap[networkId];
  if (typeof tokenId === 'undefined') {
    return null;
  }

  // const prices = await backgroundApiProxy.serviceToken.getPrices({
  //   networkId,
  //   tokenIds: [tokenId],
  // });
  // return prices?.[tokenId];
  const price = await backgroundApiProxy.servicePrice.getSimpleTokenPrice({
    networkId,
  });
  return price;
};

type TxMapType = Record<string, NFTTransaction[]>;
export const getNFTTransactionHistory = async (
  accountId?: string,
  networkId?: string,
): Promise<TxMapType> => {
  if (networkId && accountId && isCollectibleSupportedChainId(networkId)) {
    const endpoint = getFiatEndpoint();
    const apiUrl = `${endpoint}/NFT/transactions/accountV2?address=${accountId}&chain=${networkId}`;
    const { data: txMap } = await axios
      .get<NFTServiceResp<TxMapType>>(apiUrl)
      .then((resp) => resp.data);
    return txMap;
  }
  return {} as TxMapType;
};

export function buildEncodeDataWithABI(param: {
  type: string;
  from: string;
  to: string;
  id: string;
  amount: string;
}) {
  const { type, from, to, id, amount } = param;
  if (type === 'erc721') {
    return `${Erc721MethodSelectors.safeTransferFrom}${defaultAbiCoder
      .encode(['address', 'address', 'uint256'], [from, to, id])
      .slice(2)}`;
  }
  return `${Erc1155MethodSelectors.safeTransferFrom}${defaultAbiCoder
    .encode(
      ['address', 'address', 'uint256', 'uint256', 'bytes'],
      [from, to, id, amount, '0x00'],
    )
    .slice(2)}`;
}

export function createOutputActionFromNFTTransaction({
  transaction,
  address,
}: {
  transaction: NFTTransaction;
  address: string;
}) {
  const {
    send,
    receive,
    amount,
    tradePrice,
    asset,
    exchangeName,
    eventType,
    from,
    tradeSymbol,
    tradeSymbolAddress,
  } = transaction;
  if (!asset) {
    return null;
  }
  let type: IDecodedTxActionType = IDecodedTxActionType.UNKNOWN;
  const defaultData = {
    from,
    send,
    receive,
    amount: (amount ?? 0).toString(),
    asset,
    extraInfo: null,
  };
  if (eventType === 'Transfer') {
    type = IDecodedTxActionType.NFT_TRANSFER;
  } else if (eventType === 'Sale') {
    type = IDecodedTxActionType.NFT_SALE;
  } else if (eventType === 'Mint') {
    type = IDecodedTxActionType.NFT_MINT;
  } else if (eventType === 'Burn') {
    type = IDecodedTxActionType.NFT_BURN;
  }
  const action = {
    type,
    hidden: !(send === address || receive === address),
    direction: IDecodedTxDirection.IN,
    extraInfo: null,
    nftTransfer: undefined,
    nftTrade: undefined,
  };
  if (type === IDecodedTxActionType.NFT_SALE) {
    return {
      ...action,
      nftTrade: {
        ...defaultData,
        value: tradePrice,
        exchangeName,
        tradeSymbol,
        tradeSymbolAddress,
      },
    };
  }
  return {
    ...action,
    nftTransfer: defaultData,
  };
}

export async function getLocalNFTs({
  networkId,
  accountId,
}: {
  networkId: string;
  accountId: string;
}): Promise<Collection[]> {
  const key = getNFTListKey(accountId, networkId);
  const items = await simpleDb.nft.getNFTs(key);
  if (items) {
    return items;
  }
  return [];
}

export async function getAssetFromLocal({
  accountId,
  networkId,
  contractAddress,
  tokenId,
}: {
  accountId?: string;
  networkId: string;
  contractAddress?: string;
  tokenId: string;
}) {
  if (!accountId) {
    return;
  }
  const collections = await getLocalNFTs({ networkId, accountId });
  const collection = collections.find(
    (item) => item.contractAddress === contractAddress,
  );
  return collection?.assets.find((item) => item.tokenId === tokenId);
}

export async function fetchAsset({
  chain,
  contractAddress,
  tokenId,
  showAttribute,
}: {
  chain: string;
  contractAddress?: string;
  tokenId: string;
  showAttribute?: boolean;
}) {
  let apiUrl;
  const endpoint = getFiatEndpoint();
  if (OnekeyNetwork.sol === chain) {
    apiUrl = `${endpoint}/NFT/asset?chain=${chain}&tokenId=${tokenId}`;
  } else {
    apiUrl = `${endpoint}/NFT/asset?chain=${chain}&contractAddress=${
      contractAddress as string
    }&tokenId=${tokenId}`;
    if (showAttribute) {
      apiUrl += '&showAttribute=true';
    }
  }
  const { data, success } = await axios
    .get<NFTServiceResp<NFTAsset | undefined>>(apiUrl)
    .then((resp) => resp.data)
    .catch(() => ({ success: false, data: undefined }));
  if (!success) {
    return undefined;
  }
  return data;
}

export async function getAsset(params: {
  accountId?: string;
  networkId: string;
  contractAddress?: string;
  tokenId: string;
  local: boolean;
}) {
  const { local, networkId, contractAddress, tokenId } = params;
  const localAsset = await getAssetFromLocal(params);
  if (localAsset && local) {
    return localAsset;
  }
  const resp = await fetchAsset({
    chain: networkId,
    contractAddress,
    tokenId,
  });
  if (resp) {
    return resp;
  }
}
