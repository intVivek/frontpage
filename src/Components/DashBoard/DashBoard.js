/* eslint-disable react-hooks/exhaustive-deps */
import "./DashBoard.scss";
import SideBar from '../SideBar';
import ChatArea from '../ChatArea';
import {useEffect} from "react";
import { useDispatch } from "react-redux";
import {userId} from '../../Utils/Data';
import {setUser} from '../../Store/Action';
import {getUser} from '../../Utils/Api';

const DashBoard = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    getUser(userId)
    .then((user)=>{
      dispatch(setUser(user));
    })
  },[])

  return (
    <div className="dashBoard">
      <SideBar />
      <ChatArea />
    </div>
  );
};

export default DashBoard;
