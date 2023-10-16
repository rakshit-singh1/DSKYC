import React, { useState } from 'react';
const {Web3 } = require('web3');
const web3 = new Web3(window.ethereum);
const abi = require('./contract.json');


const ContractConnect = () => {
    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    const [contract, setContract] = useState("");
    const [contractAddress, setContractAddress] = useState("");

    const connectMetamask = async () => {
        if (window.ethereum !== "undefined") {
            await window.ethereum.enable();
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
            const bal = await web3.eth.getBalance(accounts[0]);
            setBalance(web3.utils.fromWei(bal, "ether"));
            window.ethereum.on('accountsChanged', async (newAccounts) => {
                setAccount(newAccounts[0]);
                const bal = await web3.eth.getBalance(newAccounts[0]);
                setBalance(web3.utils.fromWei(bal, "ether"));
            });
        }
    }

    const connectContract = async () => {
        const Add = '0xA4a1f9Acc2140ea4645ACFdfF2a210dF2D9922d6';
        setContractAddress(Add);
        setContract(new web3.eth.Contract(abi, Add));
    }

    return (
        <div>
            <center>
                <fieldset>
                    <legend className="lab">
                        Connection: <span className="val">*</span>
                    </legend>
                    <button
                        onClick={connectMetamask}
                        id="Btn"
                    >
                        Connect To Metamask
                    </button>
                    <p>Account Address: {account}</p>
                    <p>Balance: {balance}</p>
                    <button
                        onClick={connectContract}
                        id="Btn"
                    >
                        Connect To Contract
                    </button>
                    <p>Contract Address : </p>
                    <a href={`https://sepolia.etherscan.io/address/${contract._address}#code`} target="_blank" rel="noreferrer">{contract._address}</a>
                </fieldset>
            </center>
        </div>
    );
};

export default ContractConnect;
