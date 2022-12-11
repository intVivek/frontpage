import {useState, useEffect} from "react";
import {Attach, Emoji, Record, Send} from "../../Assets/Icons";
import TextField from "../TextFeild";

const Footer = ({sendChat}) => {
  const [chat, setChat] = useState("");

  const sendChatHandler = () => {
    sendChat({chat});
    setChat("");
  }
  return <div className="footer">
    <Attach />
    <Emoji />
    <TextField value={chat} setValue={setChat}/>
    {chat.length===0?<Record />:
    <div onClick={sendChatHandler}><Send /></div>}
  </div>;
};

export default Footer;
