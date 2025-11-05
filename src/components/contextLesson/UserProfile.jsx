import React, { useContext, useEffect } from 'react'
import UserContext, { userData } from './UserContext'
const UserProfile = () => {

    const userInfo = useContext(userData)
    useEffect(()=> {
        console.log(userInfo);
        
    })
  return (
    <div>
        <p>{userInfo["name"]}</p>
        <p>{userInfo["name"]}</p>
        <p>{userInfo["name"]}</p>
    </div>
  )
}

export default UserProfile