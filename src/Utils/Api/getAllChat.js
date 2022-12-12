import {messages} from '../Data';

export const getAllChat = (selectedChat) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(messages.filter(({
                    from,
                    to
                }) => ((from === selectedChat.id && to === 1) || (from === 1 && to === selectedChat.id))).sort((a, b) => new Date(a.date) - new Date(b.date)));
            }, 100);
        } catch (e) {
            reject();
        }
    })
}