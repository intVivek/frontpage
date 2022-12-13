import "./ChatBox.scss";
import {UTCtoIST} from '../../Utils/UTCtoIST';

const ChatBox = ({chat, date, own, ref}) => {
  return <div className={own?"chatBox ownChatBox":"chatBox"}>
    <div className='chat'>{chat}</div>
    <div className='date'>{UTCtoIST(date)}</div>
  </div>;
};

export default ChatBox;
