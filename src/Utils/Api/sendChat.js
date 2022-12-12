import { messages } from '../Data';

export const sendChat = (chat) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(messages.push(chat));
            }, 100);
        } catch (e) {
            reject();
        }
    })
}