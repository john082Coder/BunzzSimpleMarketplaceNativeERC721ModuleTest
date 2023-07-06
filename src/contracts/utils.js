import { ethers } from 'ethers';

import BigNumber from 'bignumber.js';
import { useWeb3React } from "@web3-react/core";
import {
  // SUBTRACT_GAS_LIMIT,
  contractAddresses,
} from './lib/constants.js';
import { bnToDec } from './utils';
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
});



export const getMarketplaceNativeERC721Contract = (bunzz) => {
  return bunzz && bunzz.contracts && bunzz.contracts.MarketplaceNativeERC721;
}

export const setErc20ContractAddress = (bunzz, address) => {
  bunzz.contracts.erc20.options.address = address;
}


export const list = async (MarketplaceNativeERC721Contract, tokenId, price, account) => {
  return MarketplaceNativeERC721Contract.methods.list(tokenId, price).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const changePrice = async (MarketplaceNativeERC721Contract, tokenId, newPrice, account) => {
  return MarketplaceNativeERC721Contract.methods.changePrice(tokenId, newPrice).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const buy = async (MarketplaceNativeERC721Contract, tokenId, account) => {
  return MarketplaceNativeERC721Contract.methods.buy(tokenId).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const cancelListing = async (MarketplaceNativeERC721Contract, tokenId, account) => {
  return MarketplaceNativeERC721Contract.methods.cancelListing(tokenId).send({ from: account})
  .on('transactionHash', (tx) => {
    console.log(tx)
    return tx.transactionHash
  }); 
}

export const tokenURI = async (erc721MintRoleContract, tokenId ) => {
  
  try {
    const uri = await erc721MintRoleContract.methods.tokenURI(tokenId).call();
    
  
    return uri;
  } catch {
    console.log("error");
    return "";
  }

}

