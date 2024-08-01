import React, { useState, useEffect } from "react";
import { Core } from "@walletconnect/core";
import { Web3Wallet, Web3WalletTypes } from "@walletconnect/web3wallet";
import { buildApprovedNamespaces, getSdkError } from "@walletconnect/utils";

interface WalletConnectComponentProps {
  setWalletConnected: (connected: boolean) => void;
}

const WalletConnectComponent: React.FC<WalletConnectComponentProps> = ({
  setWalletConnected,
}) => {
  const [address, setAddress] = useState<string | null>(null);
  const [balance, setBalance] = useState<number | null>(null);
  const [core, setCore] = useState<any | null>(null);
  const [web3wallet, setWeb3Wallet] = useState<any | null>(null);

  useEffect(() => {
    const initWalletConnect = async () => {
      const coreInstance = new Core({
        projectId: process.env.PROJECT_ID,
      });

      const metadata = {
        name: "NFT Marketplace",
        description: "AppKit Example",
        url: "https://web3modal.com",
        icons: ["https://avatars.githubusercontent.com/u/37784886"],
      };

      const web3walletInstance = await Web3Wallet.init({
        core: coreInstance,
        metadata,
      });

      setCore(coreInstance);
      setWeb3Wallet(web3walletInstance);

      web3walletInstance.on("session_proposal", async (proposal) => {
        const { id, params } = proposal;
        const { proposer } = params;
        const { publicKey } = proposer;

        const approveParams = {
          id,
          namespaces: {
            bitcoin: {
              accounts: [`bitcoin:${publicKey}`],
              methods: [],
              events: [],
            },
          },
        };

        await web3walletInstance.approveSession(approveParams);

        const account =
          approveParams.namespaces.bitcoin.accounts[0].split(":")[1];
        setAddress(account);
        setWalletConnected(true);
      });

      web3walletInstance.on("session_delete", () => {
        setAddress(null);
        setBalance(null);
        setWalletConnected(false);
      });
    };

    initWalletConnect();
  }, [setWalletConnected]);

  useEffect(() => {
    if (address) {
      const fetchBalance = async () => {
        try {
          const response = await fetch(
            `https://api.blockcypher.com/v1/btc/main/addrs/${address}/balance`
          );
          const data = await response.json();
          setBalance(data.balance);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      };

      fetchBalance();
    }
  }, [address]);

  const connectWallet = async () => {
    if (web3wallet) {
      const uri = await web3wallet.connect({
        chains: ["bitcoin"],
        methods: ["get_balance"],
        events: ["accountsChanged"],
      });
      window.open(uri, "_blank");
    }
  };

  const disconnectWallet = () => {
    if (web3wallet) {
      web3wallet.disconnect();
    }
    setAddress(null);
    setBalance(null);
    setWalletConnected(false);
  };

  return (
    <div>
      {address ? (
        <div>
          <p>Connected Address: {address}</p>
          <p>
            Balance: {balance !== null ? `${balance} satoshis` : "Loading..."}
          </p>
          <button onClick={disconnectWallet}>Disconnect Wallet</button>
        </div>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnectComponent;
