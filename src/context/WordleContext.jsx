import React, {useState, useEffect} from 'react'
import { ethers } from 'ethers'

export const WordleContext =  React.createContext();

const { ethereum } = window;

// const getEthereumContract = () => {
//     const provider = new ethers.providers.Web3Provider(ethereum) 
//     const signer = provider.getSigner()

//     const wordleContext = new ethers.Contract(signer);

//     console.log(provider, signer, wordleContext)
// }


export const WordleProvider = ({ children }) => {

    const [currentAccount, setCurrentAccount] = useState('')
    //const [formData, setFormData] = useState({ addressTo: '', amount: '', keyword: '', message: ''})

    // const handleChange = (e, name) => {
    //     setFormData((prevState) => ({...prevState, [name]: e.target.value}))
    // }
    const checkIfWalletConnected = async () => {
        try {
            if (!ethereum) return alert("Kindly Install Metamask on your Browser");
            const accounts = await ethereum.request({method: 'eth_accounts'});

            if (accounts.length) {
                setCurrentAccount(accounts[0])
            }
            else {
                alert('No account Found')
            }
            console.log(accounts)
        } catch (error) {
            console.log(error)
            throw new Error('No ethereum Object Found');
        }
    }

    async function walletConnected() {
        try {
            if (!ethereum) return alert('Install MetaMask on Your Browser');

            const accounts = await ethereum.request({method: 'eth_requestAccounts'})

            setCurrentAccount(accounts[0]);

        } catch(error) {
            console.log(error);
            throw new Error('No ethereum Objecy Found!!')
        }
    }

    useEffect(() => {
        checkIfWalletConnected();
    }, [])

    return(
        <WordleContext.Provider value={{currentAccount, walletConnected}}>
            { children }
        </WordleContext.Provider>
    )
}

