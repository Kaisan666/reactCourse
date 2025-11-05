import React, { Children, createContext } from 'react'
import UserProfile from './UserProfile'

export const userData = createContext({})

const UserContext = ({children}) => {
    const data = {
        name : "sasha",
        age : 21,
        loves : "porn"
    }
  return (
    <div>
        <userData.Provider value={data}>
            {children}
        </userData.Provider>
    </div>
  )
}

export default UserContext