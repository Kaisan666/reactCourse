import React from 'react'
import { createPortal } from 'react-dom'

const PopupContent = ({copied}) => {
  return createPortal(
    <div style={{position: "fixed", top: "0px", padding: copied ? "20px" : "0px", backgroundColor : "red"}}>
       {copied && (
        <div>Copied to ClipBoard</div>
       )}
    </div>, document.querySelector("body")
  )
}

export default PopupContent