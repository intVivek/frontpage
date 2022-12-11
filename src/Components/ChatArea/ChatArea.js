import React from "react";
import "./ChatArea.scss";
import Header from "./Header";
import ChatsTray from "./ChatsTray";
import Footer from "./Footer";

const ChatArea = () => {
  return <div className="chatArea">
    <Header />
    <ChatsTray>
    </ChatsTray>
    <Footer />
  </div>;
};

export default ChatArea;
