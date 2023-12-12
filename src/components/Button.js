import React from "react";

const Button = ({ value, handleClick })=>{
  const mapping = {
    '1': [""],
    '2': ["a", "b", "c"],
    '3': ["d", "e", "f"],
    '4': ["g", "h", "i"],
    '5': ["j", "k", "l"],
    '6': ["m", "n", "o"],
    '7': ["p", "q", "r", "s"],
    '8': ["t", "u", "v"],
    '9': ["w", "x", "y", "z"],
    '*': [""],
    '0': ["_"],
    '#': [""],
  };

  return (
    <button value={value} onClick={()=>handleClick(value)}>{value}<br/>{mapping[value]}</button>
  )
}

export default Button;