import React from "react";
import ScrollToBottom from 'react-scroll-to-bottom';

const ChatsTray = ({children}) => {
    return <ScrollToBottom className='chatsTray'>
    {children}
  </ScrollToBottom>;
};

export default ChatsTray;
