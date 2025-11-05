import React, { useState } from 'react'

const Switcher = () => {

    const [sw, setSw] = useState(false)
  return (
    <div>
        {sw ? (
            <span>Dark</span>
        ) : (
            <span>Light</span>
        )}
    </div>
  )
}

export default Switcher