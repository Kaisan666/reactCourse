import React, { useEffect, useState, createContext, useReducer} from 'react'
import CounterEffect from './components/useEffectStep/CounterEffect'
import FetchDataEffect from './components/useEffectStep/FetchDataEffect'
import ComponentA from './components/propsDrilling/ComponentA'
import UserProfile from './components/contextLesson/UserProfile'
import UserContext from './components/contextLesson/UserContext'
import Counter from './components/useReducerLesson/Counter'

const App = () => {
  return (
    <>
     <Counter/>
    </>
  )
}

export default App