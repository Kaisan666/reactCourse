import React, { useEffect, useState } from 'react'

const CounterEffect = () => {

    const [count, setCount] = useState(0)


    useEffect(() => {
        document.title = `${count}`
    }, [count])
  return (
    <div>
        <div>{count}</div>
        <button onClick={() => setCount((prevValue) => prevValue+=1)}>I increase counter</button>
    </div>
  )
}

export default CounterEffect