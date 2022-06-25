import React, { useEffect } from 'react'

const Keypad = ({ usedKeys }) => {
    const [letters, setLetters] = React.useState(null);
    const port = process.env.PORT || 8000 

    useEffect(() => {
        fetch('https://fake-wordle-json.herokuapp.com/letters')
        .then((res) => res.json())
        .then(json => {
            setLetters(json)
        })
    }, [])
    return (
        <div className='keypad'>
            {letters && letters.map((l) => {
                const color = usedKeys[l.key]
                return(
                    <div key={l.key} className={color}>
                        {l.key}
                    </div>
                    )
            })}
        </div>
    )
}

export default Keypad