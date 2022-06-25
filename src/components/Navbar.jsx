import React, {useContext} from 'react'
import { useMoralis } from 'react-moralis'
import Moralis from 'moralis'
import SwitchTheme from './SwitchTheme';
import ThemeContext from '../context/ThemeContext';
const Navbar = () => {

    const { dark } = useContext(ThemeContext);
    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();
    const [authButton, setAuthButton] = React.useState(false)
    // const cUser = Moralis.User.current()
    React.useEffect(() => {
        if(isAuthenticated) {

        }
    }, [isAuthenticated])
    // console.log(cUser)
    // console.log(account)
    const login = async () => {
        if (!isAuthenticated) {
            await authenticate({signingMessage: "Log in using Metamask"})
                .then(function(user) {
                    console.log("Logged in user: ", user)
                    console.log(user.get("ethAddress"))
                    
                })
                .catch(function(error) {
                    console.log(error)
                })
        }
    }
    const logOut = async() => {
        await logout();
        setAuthButton(true)
        console.log("Logged Out");
    
    }
        return (
        <div>
            <div className='nav' style={{textAlign: 'center'}}>
                
                <h1 style={{color: dark ? 'white' : 'black'}}>Wordle Game</h1>
                <div>
                {
                    authButton ? (<div>
                        <button onClick={login}>
                            LogIn
                        </button>
                    </div>) :
                    (<div>
                        <button onClick={logOut} disabled={isAuthenticating}>
                            LogOut
                        </button>
                    </div>)
                }
                
            </div>
        
            
            </div> 
            </div>
    )
}

export default Navbar