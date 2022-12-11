import "./ChatBox.scss";

const ChatBox = ({chat, date, own}) => {
  return <div className={own?"chatBox ownChatBox":"chatBox"}>
    <div className='chat'>{chat}</div>
    <div className='date'>{date}</div>
  </div>;
};

export default ChatBox;
