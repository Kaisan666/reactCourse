import React from 'react'

const UserStatus = ({loggedIn, isAdmin}) => {
  return (
    <div>
        {loggedIn && isAdmin ? "Welcome Admin" : loggedIn ? "Welcome User" : null}
    </div>
  )
}

export default UserStatus