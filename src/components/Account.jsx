import React, { useContext } from 'react'
import { WordleContext } from '../context/WordleContext'

const Account = () => {
    const { currentAccount } = useContext(WordleContext)
    return (
        <div>
            <div>
                {currentAccount ?
                    <div>
                        {alert('Wallet Connected Succesfully') }
                    </div> : 
                    <div className='btn-cnt'>
                        Connect your Wallet
                    </div>}
            </div>
        </div>
    )
}

export default Account