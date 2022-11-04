import Web3Modal from "web3modal";
import { ethers, utils } from "ethers";
import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";

const providerOptions = {
    coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
            appName: "Web 3 Modal Demo",
            infuraId: "ea4e9dbe0feb463da320e8bd8056f82f"
        }
    },
    walletconnect: {
        package: WalletConnect,
        options: {
            infuraId: "ea4e9dbe0feb463da320e8bd8056f82f"
        }
    }
}

const web3Modal = new Web3Modal({
    network: "rinkeby",
    cacheProvider: false, // optional
    providerOptions
})

export const connectWallet = async () => {
    const provider = await web3Modal.connect();
    await switchNetwork(provider)
    const library = new ethers.providers.Web3Provider(provider);
    const accounts = await library.listAccounts();
    if (accounts) {
        return {
            address: accounts[0],
            status: true
        }
    } else {
        return {
            address: "",
            status: false
        }
    }
}

export const disconnnectWallet = async () => {
    web3Modal.clearCachedProvider();
}

const switchNetwork = async (inst) => {
    try {
        
        await inst.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: utils.hexValue(4) }],
        });
    } catch (switchError) {
        console.log(switchError)
        // This error code indicates that the chain has not been added to MetaMask.
        if (switchError.code === 4902) {
            try {
                await inst.request({
                    method: "wallet_addEthereumChain",
                    params: [
                        {
                            chainId: utils.hexValue(4),
                            chainName: "Rinkeby Test Network",
                            rpcUrls: ["https://rinkeby.infura.io/v3/"],
                            blockExplorerUrls: ["https://rinkeby.etherscan.io"],
                            nativeCurrency: {
                                name: "ETH",
                                Symbol: "ETH",
                                decimals: 18
                            }
                        },
                    ],
                });
            } catch (addError) {
                console.log(addError)
            }
        }
    }
};