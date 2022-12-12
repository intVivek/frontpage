import {users} from '../Data';

export const getUser = (userId) => {
    return users[userId];
}