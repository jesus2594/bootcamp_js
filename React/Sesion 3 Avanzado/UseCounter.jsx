/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-trailing-spaces */
/* eslint-disable space-in-parens */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
/* eslint-disable semi */
/* eslint-disable linebreak-style */

import React, { useState } from 'react'

const UseCounter = () => {
    
    const [counter, setCounter] = useState(0)

    const increment = () => {
        
        setCounter( counter + 1)
        
    }
    const decrement = () => {
        setCounter( counter - 1)
    }
    const reset = () => {
        setCounter(0)
    }

  return (
    <div>
        <h1>Counter</h1>
        <h2> { counter } </h2>

        <button onClick={increment}> +1 </button>
        <button onClick={decrement}> -1 </button>
        <button onClick={reset}> Reset </button>
    </div>
  )
}

export default UseCounter
