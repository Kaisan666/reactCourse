import React, { useId } from 'react'

const UniqueId = () => {
  const id = useId()
    return (
    <div>
        <div>{id}</div>
    </div>
  )
}

export default UniqueId