import {users} from '../Data';

export const getUser = (userId) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve(users[userId]);
            }, 100);
        } catch (e) {
            reject();
        }
    })
}