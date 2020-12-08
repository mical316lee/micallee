import React from "react"

const ClickableIcon = (Icon: any, handleClick: any) => {
  return (
    <span style={{ cursor: "pointer" }} onClick={handleClick}>
      <Icon />
    </span>
  )
}

export default ClickableIcon
