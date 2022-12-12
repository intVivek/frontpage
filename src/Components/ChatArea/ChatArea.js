/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect} from "react";
import "./ChatArea.scss";
import Header from "./Header";
import ChatsTray from "./ChatsTray";
import Footer from "./Footer";
import ChatBox from "../ChatBox/ChatBox";
import { useSelector, useDispatch } from "react-redux";
import {setChat, setAllChat, setMessage} from '../../Store/Action';
import {getAllChat, sendChat} from '../../Utils/Api';
import getDate from '../../Utils/getDate';
import IntroScreen from "./IntroScreen";

const ChatArea = () => {
  const dispatch = useDispatch();
  const {chats, selectedChat, user} = useSelector((state) => state);
   
  useEffect(()=>{
    dispatch(setAllChat(getAllChat(selectedChat)));
  },[selectedChat])

  const sendChatHandler = (chat) => {
    const newChat = {message: chat, to: selectedChat.id, from: user.id, date: getDate()};
    dispatch(setChat(newChat));
    dispatch(setMessage({index: selectedChat.index, chat, date: getDate()}));
    sendChat(newChat);
  }

  return <>{selectedChat.index>=0?<div className="chatArea">
    <Header id={selectedChat.id}/>
    <ChatsTray>
        {chats && chats.map(({message, date, from}, i)=>{
          return <ChatBox key={i} chat={message} date={date} own={from===user.id?true:false} />
        })}
    </ChatsTray>
    <Footer sendChat={sendChatHandler} />
  </div>:<IntroScreen/>}</>
};

export default ChatArea;
