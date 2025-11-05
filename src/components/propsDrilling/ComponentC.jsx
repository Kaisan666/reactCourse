import React, { useContext } from 'react'
// import { Data, Data1 } from '../../App'
const ComponentC = () => {

    const myName = useContext(Data)
    const myAge = useContext(Data1)
  return (
    <div>
        <h1>{myName}</h1>
        <h2>{myAge}</h2>
    </div>
  )
}

export default ComponentC