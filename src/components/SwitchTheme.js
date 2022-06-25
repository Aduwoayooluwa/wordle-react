import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';

const SwitchTheme = () => {
    const { dark, toggle } = useContext(ThemeContext)
    return (
        <div>
            <button 
        className='Switch'
        onClick={() => toggle()}
        >
        <Sun className={`icon ${!dark ? 'active' : ''}`}/>
        <Moon className={`icon ${dark ? 'active' : ''}`}/>
    </button>

        </div>
    )
}

export default SwitchTheme