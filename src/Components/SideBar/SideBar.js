import "./SideBar.scss"
import {useState, useEffect} from "react";
import Header from "./Header";
import Search from '../Search';
import MessagesTray from './MessagesTray';
import MessageBox from '../MessageBox';
import { useSelector, useDispatch } from "react-redux";


const SideBar = () => {
  const {messages} = useSelector((state) => state);

  return <div className="sideBar">
    <Header />
    <Search />
    <MessagesTray >
      {messages && messages.map(({from, name, message, date, avatar}) => {
        return <MessageBox 
          key={from} 
          name={name} 
          message={message} 
          date={date}
          avatar={avatar} 
        />;
      })}
    </MessagesTray >
  </div>;
};

export default SideBar;
