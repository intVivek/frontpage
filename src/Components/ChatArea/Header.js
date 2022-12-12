import {useState, useEffect} from "react";
import Avatar from '../Avatar';
import {Menu, Search} from "../../Assets/Icons";
import {getUser} from '../../Utils/Api';

const Header = ({id}) => {
  const [friend, setFriend] = useState({});

  useEffect(()=>{
    setFriend(getUser(id));
  },[id])
  return <div className='header'>
    <Avatar url={friend.avatar} size={"small"}/>
    <div className='details'>
      <div className='name'>{friend.name}</div>
      <div className='status'>{"Online"}</div>
    </div>
    <div><Search /></div>
    <Menu />
  </div>;
};

export default Header;
