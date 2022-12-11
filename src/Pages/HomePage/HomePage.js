import "./HomePage.scss";
import _ from 'lodash';
import {useEffect} from "react";
import DashBoard from "../../Components/DashBoard";
import { useSelector, useDispatch } from "react-redux";
import { setAllMessage} from '../../Store/Action';
import {messages} from '../../Utils/Data';

const HomePage = () => {

  const repoState = useSelector((state) => state);
	const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setAllMessage(Object.values(_.groupBy(messages.filter(({to})=>to===1), 'from'))));
  },[])

  return (
    <div className="homePage">
      <div className="stripe"></div>
      <DashBoard />
    </div>
  );
};

export default HomePage;
