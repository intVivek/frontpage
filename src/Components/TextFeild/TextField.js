import "./TextField.scss"
import React from "react";

const TextField = ({value, setValue, handleKeyDown}) => {
  return <div className="textField">
    <input 
        value={value} 
        onKeyDown={handleKeyDown}
        onChange={e=>setValue(e.target.value)} 
        placeholder=" Type a message" 
    />
  </div>;
};

export default TextField;
