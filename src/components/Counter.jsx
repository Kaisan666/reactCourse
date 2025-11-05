import React, { useState } from 'react'

const Counter = () => {
const [count, setCount] = useState(0)


const increment = () => {
    setCount(prevCount => prevCount + 1)
}
  return (
    <div>

        <h1>count: {count}</h1>
        <button onClick={increment}>increment</button>
    </div>
  )
}

export default Counter