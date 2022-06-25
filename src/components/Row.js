import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Row = ({ guess, currentGuess }) => {
    const { dark } = useContext(ThemeContext)
    if (guess) {
        return(
            <div className="row past">
                {guess.map((l, i) => (
                    <div key={i} style={{color: dark ? 'white' : 'black'}} className={l.color}>
                        {l.key}
                    </div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        let letters = currentGuess.split('')

        return (
            <div className='row current'>
                {letters.map((letter, i) => {
                    return(
                        <div key={i} style={{color: dark ? 'white' : 'black'}} className='filled'>
                            {letter}
                        </div>
                    )
                })}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
            )
    }
    return (
        <div className='row'>
            <div>

            </div>

            <div>
                
            </div>

            <div>
                
            </div>

            <div>
                
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default Row