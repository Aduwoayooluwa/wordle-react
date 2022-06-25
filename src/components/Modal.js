import React from 'react'

const Modal = ({ isCorrect, turn, solution }) => {
    return (
        <div className='modal'>
            {
            isCorrect && (<div>
                <h1>Congratulations🎈🎉🎉✨🎊</h1>
                <p className='solution'>{solution}</p>
                <p>You got the solution in {turn} out of 5 times</p>
            </div>)
            }

            {
            !isCorrect && (<div>
                <h1>Sorry bro! </h1>
                <p className='solution'>{solution}</p>
                <p>You didn't even get it right. You need to study more. Oloshi 😡. See how you were just typing rubbish. Oponu Ode Oshi 😒 </p>
            </div>)
            }
        </div>
    )
}

export default Modal