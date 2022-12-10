import "./MessagesTray.scss";
import React from "react";

const MessagesTray = ({children}) => {
  return <div className='messagesTray'>
    {children}
  </div>;
};

export default MessagesTray;
