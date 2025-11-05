import React, { useState } from 'react'

const Profile = () => {

    const [userData, setUserData] = useState({
        name : "Alex",
        age : 21,
    })
  return (
    <div>
        <p>{userData.name}</p>
        <p>{userData.age}</p>


        <input type="text" value={userData.name} onChange={(e) => setUserData((prevData) =>  ({...prevData, name : e.target.value}))}/>
        <input type="number" value={userData.age} onChange={(e) => setUserData((prevData) => ({...prevData, age : Number(e.target.value)}))}/>
    </div>
  )
}

export default Profile