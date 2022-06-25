import React, { useEffect } from 'react'
import useWorlde from '../hooks/useWordle'
import Grid from './Grid'
import Keypad from './Keypad'
import Modal from './Modal'

const Worlde = ({ solution }) => {
    const { currentGuess, handleKeyUp, guesses, isCorrect, usedKeys, turn } = useWorlde(solution)
    const [showModal, setShowModal] = React.useState(false)
    const [showSoln, setShowSoln] =  React.useState(false)
    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp)

        if (isCorrect) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        if(turn > 5) {
            setTimeout(() => setShowModal(true), 2000)
            window.removeEventListener('keyup', handleKeyUp)
        }

        return () => window.removeEventListener('keyup', handleKeyUp)
    }, [handleKeyUp, isCorrect, turn])
    

    useEffect(() => {
        console.log(guesses, turn, isCorrect)
    }, [guesses, turn, isCorrect])

    function handleClick() {
        setShowSoln(true)
    }

    return (
        <div>   
            {
                !showSoln ? (
                    <div>
                        
                    </div>
                ) :

                (
                    <div>
                        <p>solution - {solution}</p>
                    </div>
                )
            }
                
                {/* <p>Current Guess - { currentGuess }</p> */}
                <button className='show_soln' onClick={handleClick}>Show Answer</button>
                <Grid currentGuess={currentGuess} guesses={guesses} turn={turn}/>
        
                <Keypad usedKeys={usedKeys} />
                {showModal && <Modal isCorrect={isCorrect} turn={turn} solution={solution} />}
        </div>
    )
}

export default Worlde