import { legacy_createStore as createStore} from 'redux'
import repoReducer from './Reducer/index';

const initialValue = {messages: [], chats: [], selectedChat: {id: -1, index: -1}, user: {id: 1}};

const store = createStore(
  repoReducer, initialValue
);

export default store;