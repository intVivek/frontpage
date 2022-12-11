import {messages} from '../Data';

export const getAllChat = (selectedChat) => {
    return messages.filter(({from, to})=>from===selectedChat&&to===1);
}