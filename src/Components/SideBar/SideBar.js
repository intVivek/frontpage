/* eslint-disable react-hooks/exhaustive-deps */
import "./SideBar.scss"
import {useEffect} from "react";
import Header from "./Header";
import Search from '../Search';
import MessagesTray from './MessagesTray';
import MessageBox from '../MessageBox';
import { useSelector, useDispatch } from "react-redux";
import {selectChat, setAllMessage} from '../../Store/Action';
import {getAllMessage} from '../../Utils/Api';
import getTimeFromDate from '../../Utils/getTimeFromDate';


const SideBar = () => {
  const {messages, user, selectedChat} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    getAllMessage(user.id)
    .then((messages)=>{
      dispatch(setAllMessage(messages));
    })
  },[user])

  const selectChatHandler = (from, i) => {
    dispatch(selectChat({id: from, index: i}));
  }

  return <div className="sideBar">
    <Header url={user.avatar}/>
    <Search />
    <MessagesTray >
      {messages && messages.map(({id, name, message, date, avatar}, i) => {
        return <MessageBox 
          key={id} 
          id={id}
          index={i}
          name={name} 
          message={message} 
          time={getTimeFromDate(date)}
          avatar={avatar} 
          selectedChat={selectedChat}
          onClick={selectChatHandler}
        />;
      })}
    </MessagesTray >
  </div>;
};

export default SideBar;
