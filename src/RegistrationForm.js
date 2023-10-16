import React from "react";
import "./RegistrationForm.css";

import { useState } from "react";
import {
    checkFname,
    checkMname,
    checkLname,
    checkAdd,
    checknumb,
    checkAadhar,
} from "./utils/validation";
const { Web3 } = require('web3');
const web3 = new Web3(window.ethereum);
const abi = require('./contract.json');
// import PhoneInput from 'react-phone-number-input';
// import 'react-phone-number-input/style.css';
const RegistrationForm = () => {
    // const [phoneNumber, setPhoneNumber] = useState('');

    // const handlePhoneNumberChange = (value) => {
    //     setPhoneNumber(value);
    // };
    // const extractPhoneNumberInfo = () => {
    //     const parts = phoneNumber.split(' ');
    //     const countryCallingCode = parts[0] || '';
    //     const number = parts[1] || '';
    //     return { countryCallingCode, number };
    //   };
    
    // const { countryCallingCode, number } = extractPhoneNumberInfo();
    // console.log(number,'a',countryCallingCode)

    const [account, setAccount] = useState("");
    const [balance, setBalance] = useState("");
    const [contract, setContract] = useState("");
    const [contractAddress, setContractAddress] = useState("");
    const [kyc, setKyc] = useState("");
    const [details, setDetails] = useState(null);
    //console.log(details);

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
    //console.log(contract.methods)
    const PerformKyc = async () => {
        const fullName = `${firstName} ${middleName} ${lastName}`.trim();
        const txObject = {
            from: account,
            to: contract._address,
            gas: 500000,
            data: contract.methods.setDetails(fullName, number, address, aadhar).encodeABI(),
        };
        
        const txHash = await web3.eth.sendTransaction(txObject);
        setKyc(txHash.transactionHash);
    }
    
    const GetKyc = async () => {
        try {
            const det = await contract.methods.getDetails(account).call();
            const deta="";
            if(det[3].length!=12){
                setDetails("Kyc not done Yet");
            }
            else
            {
                setDetails(`Name: ${det[0]} \nNumber: ${det[1]} \nAddress: ${det[2]} \nAadhar: ${det[3]}`);
            }
            //console.log('Details:','1)' , det[0].length,'2)' ,det[4]);
            } catch (error) {
            console.error('Error calling the function:', error);
            }
    }

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [number, setNumber] = useState('');
    const [aadhar, setAadhar] = useState('');
    

    const handlefirstName = (event) => {
        const value = event.target.value;
        const isValid = checkFname(value); 
        if (isValid) {
            setFirstName(value);
        }
    };
    console.log(firstName);
    const handlemiddleName = (event) => {
        const value = event.target.value;
        const isValid = checkMname(value); 
        if (isValid) {
            setMiddleName(value);
        }
    };
    console.log(middleName);
    const handlelastName = (event) => {
        const value = event.target.value;
        const isValid = checkLname(value); 
        if (isValid) {
            setLastName(value);
        }
    };
    console.log(lastName);
    const handleaddress = (event) => {
        const value = event.target.value;
        const isValid = checkAdd(value); 
        if (isValid) {
            setAddress(value);
        }
    };
    console.log(address);
    const handleaadhar = (event) => {
        const value = event.target.value;
        const isValid = checkAadhar(value); 
        if (isValid) {
            setAadhar(value);
        }
    };
    console.log(aadhar);
    const handlenumber = (event) => {
        const value = event.target.value;
        const isValid = checknumb(value); 
        if (isValid) {
            setNumber(value);
        }
    }; 
    console.log(number);  


    return (
        <div>
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
                <p className="lab">Account Address:{account}</p>
                <p className="lab">Balance:{balance}</p>
                <button
                onClick={connectContract}
                id="Btn"
                >
                    Connect To Contract
                </button>
                <p className="lab">Contract Address : </p>
                <a href={`https://sepolia.etherscan.io/address/${contract._address}#code`} target="_blank" rel="noreferrer">{contract._address}</a>
            </fieldset>
            <fieldset>    
                <legend className="lab">
                    First Name: <span className="val">*</span>
                </legend>
                <input
                    type="text"
                    id="fname"
                    maxLength="20"
                    onChange={handlefirstName}
                    inputMode="text"
                    placeholder="Enter your first name"
                />
                <br />
                <p className="val" id="fnameval"></p>
            </fieldset>

            <fieldset>
                <legend className="lab">Middle Name:</legend>
                <input
                    type="text"
                    id="mname"
                    maxLength="20"
                    onChange={handlemiddleName}
                    inputMode="text"
                    placeholder="Enter your middle name"
                />
                <br />
                <p className="val" id="mnameval"></p>
            </fieldset>

            <fieldset>
                <legend className="lab">
                    Last Name: <span className="val">*</span>
                </legend>
                <input
                    type="text"
                    id="lname"
                    maxLength="35"
                    onChange={handlelastName}
                    inputMode="text"
                    placeholder="Enter your last name"
                />
                <br />
                <p className="val" id="lnameval"></p>
            </fieldset>

            <fieldset>
                <legend className="lab">
                    Aadhar: <span className="val">*</span>
                </legend>
                <input
                    type="text"
                    id="aadhar"
                    maxLength="12"
                    onChange={handleaadhar}
                    inputMode="text"
                    placeholder="Enter your Aadhar"
                />
                <br />
                <p className="val" id="aadharval"></p>
            </fieldset>

            <fieldset>
                <legend className="lab">
                    Address: <span className="val">*</span>
                </legend>
                <textarea
                    id="address"
                    maxLength="120"
                    onChange={handleaddress}
                    inputMode="text"
                    placeholder="Enter your address"
                    rows="3"
                    cols="20"
                    wrap="hard"
                ></textarea>
                <br />
                <p className="val" id="addressval"></p>
            </fieldset>

            {/* <fieldset>
                <legend className="lab">
                    Phone Numbers: <span className="val">*</span>
                </legend>
                <div id="number">
                <PhoneInput
                    international
                    defaultCountry="IN" // Default country code
                    value={phoneNumber}
                    onChange={checknumb?handlePhoneNumberChange:undefined}
                    id="numb"
                />
                </div>
                <br />
                <p className="val" id="numbval"></p>
            </fieldset> */}
            <fieldset>
                <legend className="lab">
                    Phone Numbers: <span className="val">*</span>
                </legend>
                <div id="number">
                    <select id="countrycode">
                        <option>+91</option>
                    </select>
                    <input
                        type="number"
                        id="numb"
                        maxLength="10"
                        onChange={handlenumber}
                        inputMode="tel"
                        placeholder="Enter your phone number"
                    />
                </div>
                <br />
                <p className="val" id="numbval"></p>
            </fieldset>

            <center>
            <button
                id="Btn"
                onClick={PerformKyc}
            >
            Register
            </button><br/>
            <a href={`https://sepolia.etherscan.io/tx/${kyc}`} target="_blank" rel="noreferrer">{kyc}</a><br/>
            <button
                id="Btn"
                onClick={GetKyc}
            >
            CheckDetails
            </button><br/>
            <p className="lab">{details}</p>
            {/* <h2>Fruits List:</h2>
            <ul>
                {details.map((fruit, index) => (
                    <li key={index}>{details}</li>
                ))}
            </ul> */}
            </center>
        </div>
    );
};

export default RegistrationForm;
