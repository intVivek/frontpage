import {messages} from '../Data';

export const getAllChat = (selectedChat) => {
    console.log(selectedChat);
    return messages.filter(({from, to})=>(from===selectedChat.id&&to===1)||(from===1&&to===selectedChat.id)).sort((a,b)=>new Date(a.date)-new Date(b.date));
}