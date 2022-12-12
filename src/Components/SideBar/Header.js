import React from "react";
import Avatar from '../Avatar';
import {Menu, Status, NewChat, Community} from "../../Assets/Icons";
const Header = ({url}) => {
  return <div className='header'>
    <Avatar url={url} size='small' />
    <Community />
    <NewChat />
    <Status />
    <Menu />
  </div>;
};

export default Header;
