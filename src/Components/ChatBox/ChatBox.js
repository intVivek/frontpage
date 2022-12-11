import "./ChatBox.scss";
import getTimeFromDate from '../../Utils/getTimeFromDate';

const ChatBox = ({chat, date, own}) => {
  return <div className={own?"chatBox ownChatBox":"chatBox"}>
    <div className='chat'>{chat}</div>
    <div className='date'>{getTimeFromDate(date)}</div>
  </div>;
};

export default ChatBox;
