import "./DashBoard.scss";
import SideBar from '../SideBar';
import ChatArea from '../ChatArea';

const DashBoard = () => {

  return (
    <div className="dashBoard">
      <SideBar />
      <ChatArea />
    </div>
  );
};

export default DashBoard;
