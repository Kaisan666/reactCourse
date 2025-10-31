import React from 'react'

const Weather = ({temperature}) => {

  if (temperature < 15){
    return <div>Its cold outside</div>
  }
  else if (temperature > 15 && temperature < 25){
    return <div>its nice outside</div>
  }
  else {
    return <div>its hot outside</div>
  }
}

export default Weather