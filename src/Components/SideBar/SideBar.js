import "./SideBar.scss"
import {useState, useEffect} from "react";
import Header from "./Header";
import Search from '../Search';
import MessagesTray from './MessagesTray';
import MessageBox from '../MessageBox';

const SideBar = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages();
  }, []);

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
