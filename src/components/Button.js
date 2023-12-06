import React, {useState} from "react";

const Button = ({ value, handleClick, selectChar })=>{
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
  const [clickCount, setClickCount] = useState(0);

  const handleBtnClick = () => {
    if(selectChar){
      handleChar();
    }else{
      handleClick(value);
    }
  };

  const handleChar = () => {
    setClickCount((prevCount) => prevCount + 1);

    setTimeout(() => {
      const mapping_chars = mapping[value];
      const selectedCharacter = mapping_chars[clickCount % mapping_chars.length];

      handleClick(selectedCharacter === "_" ? " " : selectedCharacter);
      setClickCount(0);
    },700);
  }

  return (
    <button value={value} onClick={handleBtnClick}>{value}<br/>{mapping[value]}</button>
  )
}

export default Button;