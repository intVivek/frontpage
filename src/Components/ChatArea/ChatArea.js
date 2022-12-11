import {useEffect} from "react";
import "./ChatArea.scss";
import Header from "./Header";
import ChatsTray from "./ChatsTray";
import Footer from "./Footer";
import ChatBox from "../ChatBox/ChatBox";
import { useSelector, useDispatch } from "react-redux";
import {setChat, setAllChat} from '../../Store/Action';
import {getAllChat, sendChat} from '../../Utils/Api';

const ChatArea = () => {
  const dispatch = useDispatch();
  const {chats, selectedChat, user} = useSelector((state) => state);
   
  useEffect(()=>{
    dispatch(setAllChat(getAllChat(selectedChat)));
  },[selectedChat])

  const sendChatHandler = ({chat}) => {
    const newChat = {message: chat, to: selectedChat, from: user.id, date: new Date()}
    console.log(newChat)
    dispatch(setChat(newChat));
    sendChat(newChat);
  }

  return <div className="chatArea">
    <Header />
    <ChatsTray>
      {chats && chats.map(({message, data, to})=>{
        return <ChatBox chat={message} date={data} own={to===user.id?true:false}/>
      })}
    </ChatsTray>
    <Footer sendChat={sendChatHandler} />
  </div>;
};

export default ChatArea;
