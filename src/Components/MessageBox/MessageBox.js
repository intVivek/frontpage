import "./MessageBox.scss"
import {useState} from "react";
import Avatar from '../Avatar';
import {Chevron} from '../../Assets/Icons';

const MessageBox = ({name, message, time, avatarURL}) => {
  const [hover, setHover] = useState(false);

  const getTime = () => {
    return time;
  }
  return (
    <div 
      className='messageBox' 
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
    >
    <Avatar url={avatarURL}/>
    <div className='details'>
      <div className='name'>{name}</div>
      <div className='message'>{message}</div>
      <div className="time">{getTime()}</div>
    </div>
    <div className={hover?"chevron hover":"chevron"}><Chevron /></div>
  </div>
  );
};

export default MessageBox;
