import React from "react";

const Button = (props)=>{
  return (
    <button key={props.key} value={props.value} onClick={props.handleClick}>{props.value}</button>
  )
}

export default Button;