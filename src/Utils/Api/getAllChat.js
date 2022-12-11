import {messages} from '../Data';

export const getAllChat = (selectedChat) => {
    return messages.filter(({from, to})=>(from===.id&&to===1)||(from===1&&to===selectedChat.id)).sort((a,b)=>new Date(a.date)-new Date(b.date));
}