import "./MessageBox.scss"
import React from "react";
import Avatar from '../Avatar';

const MessageBox = ({name, message, time, avatarURL}) => {
  return <div className='messageBox'>
    <Avatar url={avatarURL}/>
  </div>;
};

export default MessageBox;
