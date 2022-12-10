import "./SideBar.scss"
import React from "react";
import Header from "./Header";
import Search from '../Search';
import MessagesTray from './MessagesTray';
import MessageBox from '../MessageBox';

const SideBar = () => {
  return <div className="sideBar">
    <Header />
    <Search />
    <MessagesTray >
      <MessageBox name="Vivek" message="How are you doing ?" time="Yesterday"/>
    </MessagesTray >
  </div>;
};

export default SideBar;
