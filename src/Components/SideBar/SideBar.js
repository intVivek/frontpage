import "./SideBar.scss"
import {useState, useEffect} from "react";
import Header from "./Header";
import Search from '../Search';
import MessagesTray from './MessagesTray';
import MessageBox from '../MessageBox';
import { useSelector, useDispatch } from "react-redux";


const SideBar = () => {
    const {messages} = useSelector((state) => state);
  useEffect(() => {
    console.log(messages);
  }, [messages]);

  return <div className="sideBar">
    <Header />
    <Search />
    <MessagesTray >
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
    </MessagesTray >
  </div>;
};

export default SideBar;
