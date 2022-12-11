import React from "react";
import Avatar from '../Avatar';
import {Menu, Search} from "../../Assets/Icons";
const Header = ({url, name}) => {
  return <div className='header'>
    <Avatar url={"https://lh3.googleusercontent.com/-6sMMxPABkSg/AAAAAAAAAAI/AAAAAAAAAAA/AFi9ZuFhvjNprVoXxaytsxxevSXDvM_mTw/photo.jpg?sz=46"} size={"small"}/>
    <div className='details'>
      <div className='name'>{"VIVEK SRIVASTAVA"}</div>
      <div className='status'>{"Online"}</div>
    </div>
    <div><Search /></div>
    <Menu />
  </div>;
};

export default Header;
