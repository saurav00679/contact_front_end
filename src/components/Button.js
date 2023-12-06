import React from "react";

const Button = (props)=>{
  return (
    <button value={props.value} onClick={props.handleClick}>{props.value}</button>
  )
}

export default Button;