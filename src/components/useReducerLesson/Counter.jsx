import React, { useReducer } from 'react'
import { counterReducerFunc } from './CounterReducer'

const Counter = () => {

    const [state, dispatch] = useReducer(counterReducerFunc, 0)
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({type : "increment"})}>+</button>
        <button onClick={() => dispatch({type : "decrement"})}>-</button>
        <button onClick={() => dispatch({type : "powTwo"})}>**</button>
    </div>
  )
}

export default Counter