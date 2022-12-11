import "./DashBoard.scss";
import SideBar from '../SideBar';
import ChatArea from '../ChatArea';
import {useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setAllMessage} from '../../Store/Action';
import {getAllMessage} from '../../Utils/Api';

const DashBoard = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setAllMessage(getAllMessage()));
  },[])

  return (
    <div className="dashBoard">
      <SideBar />
      <ChatArea />
    </div>
  );
};

export default DashBoard;
