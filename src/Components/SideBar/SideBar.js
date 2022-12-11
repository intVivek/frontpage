import "./SideBar.scss"
import {useEffect} from "react";
import Header from "./Header";
import Search from '../Search';
import MessagesTray from './MessagesTray';
import MessageBox from '../MessageBox';
import { useSelector, useDispatch } from "react-redux";
import {selectChat, setAllMessage} from '../../Store/Action';
import {getAllMessage} from '../../Utils/Api';


const SideBar = () => {
  const {messages} = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setAllMessage(getAllMessage()));
  },[])

  const selectChatHandler = (from) => {
    dispatch(selectChat(from));
  }

  return <div className="sideBar">
    <Header />
    <Search />
    <MessagesTray >
      {messages && messages.map(({id, name, message, date, avatar}) => {
        return <MessageBox 
          key={id} 
          id={id}
          name={name} 
          message={message} 
          date={date}
          avatar={avatar} 
          onClick={selectChatHandler}
        />;
      })}
    </MessagesTray >
  </div>;
};

export default SideBar;
