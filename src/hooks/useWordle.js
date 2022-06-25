import {useState} from 'react'


const useWorlde = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)]) // each guess is an array
    const [history, setHistory] = useState([]) // each guess is a string
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({}) // {a: 'green', b: 'yello', c: 'grey'}

    // crearing two functions
    // 1. format a guess into an array of letter objects
    // e.g. [{key: 'a', color: 'yellow'}]
    const formatGuess = () => {

        console.log('....Formating the guess', currentGuess)
        let solutionArray = [...solution]
        let formatedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        // find any green letters
        formatedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formatedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        formatedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formatedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf('.key')] = null
            }
        })

        return formatedGuess
    }

    // add new guess to the guesses state
    // update the isCorrect state if the guess is correct
    // add one to turn state

    const addNewGuess = (formattedGuess) => {
        if (currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess
            return newGuesses
        })

        setHistory((prevHiistory) => {
            return [...prevHiistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1
        })

        setUsedKeys((prevKeys) => {
            let newKeys = {...prevKeys}

            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key]

                if (l.color === 'green') {
                    newKeys[l.key] = 'green'
                    return

                }

                if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow'
                    return
                }

                if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yello') {
                    newKeys[l.key] = 'grey'
                    return
                }

            })
            return newKeys
        })
        setCurrentGuess('')
    }

    // handle keep up eevents and tracks current giuess
    // if user presses enter, add the new guess

    const handleKeyUp = ({ key }) => {

        if (key === 'Enter') {
            // only add guess if turn is less than 5
            if (turn > 5) {
                console.log('Max guesses reached')
                return
            }
            // do not alllow duplicate words
            if (history.includes(currentGuess)) {
                console.log('You already tried that word')
                return
            }
            // chck if word is 5 chars long
            if (currentGuess.length !== 5) {
                console.log('Words must be 5 letters long')
                return 
            }

            const formatted = formatGuess()
            addNewGuess(formatted)

        }
        if (key === 'Backspace') {
            setCurrentGuess(prev => {
                return prev.slice(0, -1)
            })
            return
        }

        if (/^[A-Za-z]$/.test(key)) {
            if ( currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp}
}

export default useWorlde