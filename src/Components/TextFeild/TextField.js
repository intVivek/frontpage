import "./TextField.scss"
import React from "react";

const TextField = ({value, setValue}) => {
  return <div className="textField">
    <input 
        value={value} 
        onChange={e=>setValue(e.target.value)} 
        placeholder=" Type a message" 
    />
  </div>;
};

export default TextField;
