import {messages, users} from '../Data';
import _ from 'lodash';

export const getAllMessage = (id) => {
    return Object.values(_.groupBy(messages.filter(({from, to})=>from===id||to===id), ({from, to})=>from===id?to:from))
    .map(chats => {
        return chats.reduce((prev, current)=>{
            return new Date(prev.date) > new Date(current.date) ? prev : current
        })
    }).map(({from, to, date, message})=>{
        return id===from?{ ...users[to],date, message}:{ ...users[from],date, message}
    }).sort((a,b)=>new Date(b.date)-new Date(a.date));
}