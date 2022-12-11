import {messages, users} from '../Data';
import _ from 'lodash';

export const getAllMessage = () => {
    return Object.values(_.groupBy(messages.filter(({to})=>to===1), 'from'))
    .map(chats => {
        return chats.reduce((prev, current)=>{
            return prev.date > current.date ? prev : current
        })
    }).map(({from, date, message})=>{
        return { ...users[from],date, message}
    })
}