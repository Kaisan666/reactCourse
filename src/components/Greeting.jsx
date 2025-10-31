import React from 'react'

const Greeting = ({timeOfDate}) => {
    

  return (

    <div>Good {timeOfDate === "morning" ? "morning" : "afternoon"} !</div>
  )
}

export default Greeting