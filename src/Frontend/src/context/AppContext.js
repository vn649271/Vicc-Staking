/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";
import {
  viccDeployedInfo,
  stakingDeployedInfo,
} from "../utils/constants";

export const AppContext = createContext();

const providerOptions = {
  walletconnect: {
    package: WalletConnect,
    options: {
      infuraId: "538f6602a3474dfab48d5e4728f98d13"
    }
  }
};

export const AppcontextProvider = ({ children }) => {
  const [account, setAccount] = useState();
  const [networkId, setNetworkId] = useState();
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [network, setNetwork] = useState();
  const [isShowConnectModal, setIsShowConnectModal] = useState();
  const [isShowDisConnectModal, setIsShowDisConnectModal] = useState();


  const web3Modal = new Web3Modal({
    cacheProvider: true,
    providerOptions, // required
    theme: "dark"
  });
  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new ethers.providers.Web3Provider(provider);
      const accounts = await library.listAccounts();
      const network = await library.getNetwork();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setNetwork(network);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts) => {
        setAccount(accounts[0]);
      };

      const handleChainChanged = (chainId) => {
        setNetworkId(chainId);
      };

      const handleDisconnect = () => {
        disconnectWallet();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);

      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [provider]);

  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connectWallet();
    }
  }, [])

  const refreshState = () => {
    setAccount();
    setNetworkId();
    setNetwork();
  };

  const disconnectWallet = async () => {
    await web3Modal.clearCachedProvider();
    refreshState();
    setIsShowDisConnectModal(false);
  }

  const disconnect = () => {
    setIsShowDisConnectModal(true);
  }

  const getStakingContract = (providerOrSigner) => {
    const loanContract = new ethers.Contract(
      stakingDeployedInfo.address,
      stakingDeployedInfo.abi,
      providerOrSigner
    );
    return loanContract;
  };
  const getBcContract = (providerOrSigner) => {
    const bcContract = new ethers.Contract(
      viccDeployedInfo.address,
      viccDeployedInfo.abi,
      providerOrSigner
    );
    return bcContract;
  };

  return (
    <AppContext.Provider
      value={{
        connectWallet,
        disconnectWallet,
        disconnect,
        account,
        library,
        provider,
        getStakingContract,
        networkId,
        network,
        getBcContract,
        setIsShowDisConnectModal,
        isShowConnectModal,
        isShowDisConnectModal,
        setIsShowConnectModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
