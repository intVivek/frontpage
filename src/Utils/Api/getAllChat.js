import {messages} from '../Data';

export const getAllChat = (selectedChat, id) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(messages.filter(({
                    from,
                    to
                }) => ((from === selectedChat.id && to === id) || (from === id && to === selectedChat.id))).sort((a, b) => new Date(a.date) - new Date(b.date)));
            }, 100);
        } catch (e) {
            reject();
        }
    })
}