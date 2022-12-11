import { messages } from '../Data';

export const sendChat = (chat) => {
    return messages.push(chat);
}