import React, { useEffect } from 'react'

const BasicEffects = () => {
    useEffect(() => {
        console.log("Hello, ive been mounted");
        
    }, [])
  return (
    <div>BasicEffects</div>
  )
}

export default BasicEffects