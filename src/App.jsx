import React, { useEffect, useState, createContext, useReducer, useRef} from 'react'
import useFetch from './components/hooks/useFetch'
import UniqueId from './components/UniqueId';
const App = () => {
  const data = useFetch("https://jsonplaceholder.typicode.com/posts")
  console.log(data);
  
  return (
    <>
    <UniqueId/>
    <UniqueId/>
    <UniqueId/>
    <UniqueId/>
    <UniqueId/>
    <UniqueId/>
    <UniqueId/>
    </>
  )
}

export default App