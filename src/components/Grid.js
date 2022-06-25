import React from 'react'
import Row from './Row'

const Grid = ({ currentGuess, guesses, turn }) => {
    return (
        <div>
            {guesses.map((g, index) => {
                if (turn === index) {
                    return <Row key={index} currentGuess={currentGuess} />
                }
                return <Row key={index} guess={g}/>
            })}

        </div>
    )
}

export default Grid