import React from "react";
import Avatar from '../Avatar';
import {Menu, Status, NewChat, Community} from "../../Assets/Icons";
const Header = () => {
  return <div className='header'>
    <Avatar url='https://i.pinimg.com/originals/0c/0d/0d/0c0d0d8b8b0c8b8b1b1b1b1b1b1b1b1b.jpg' size='small' />
    <Community />
    <NewChat />
    <Status />
    <Menu />
  </div>;
};

export default Header;
