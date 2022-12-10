import "./MessageBox.scss"
import React from "react";
import Avatar from '../Avatar';

const MessageBox = ({name, message, time, avatarURL}) => {

  const getTime = () => {
    return time;
  }
  return <div className='messageBox'>
    <Avatar url={avatarURL}/>
    <div className='details'>
      <div className='name'>{name}</div>
      <div className='message'>{message}</div>
      <div className="time">{getTime()}</div>
    </div>
  </div>;
};

export default MessageBox;
