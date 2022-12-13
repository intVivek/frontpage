import "./MessageBox.scss"
import {useState} from "react";
import Avatar from '../Avatar';
import {Chevron} from '../../Assets/Icons';
import {UTCtoIST} from '../../Utils/UTCtoIST';

const MessageBox = ({name, message, id, time, avatar, onClick, selectedChat, index}) => {
  const [hover, setHover] = useState(false);


  return (
    <div 
      key={name}
      className= {selectedChat.id===id?'messageBox messageBoxSelected':'messageBox'} 
      onMouseEnter={()=>setHover(true)}
      onMouseLeave={()=>setHover(false)}
      onClick={()=>onClick(id, index)}
    >
    <Avatar url={avatar}/>
    <div className='details'>
      <div className='name'>{name}</div>
      <div className='message'>{message}</div>
      <div className="time">{UTCtoIST(time)}</div>
    </div>
    <div className={hover?"chevron hover":"chevron"}><Chevron /></div>
  </div>
  );
};

export default MessageBox;
