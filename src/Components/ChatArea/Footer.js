import {useState} from "react";
import {Attach, Emoji, Record, Send} from "../../Assets/Icons";
import TextField from "../TextFeild";

const Footer = ({sendChat}) => {
  const [chat, setChat] = useState("");

  const sendChatHandler = () => {
    if(chat.length===0)return;
    sendChat(chat);
    setChat("");
  }

  const handleKeyDown = (event) => {
    if(event.key==="Enter"){
      sendChatHandler();
    }
  }
  return <div className="footer">
    <Attach />
    <Emoji />
    <TextField value={chat} handleKeyDown ={handleKeyDown} setValue={setChat}/>
    {chat.length===0?<Record />:
    <div 
      onClick={sendChatHandler}
    >
      <Send />
    </div>}
  </div>;
};

export default Footer;
