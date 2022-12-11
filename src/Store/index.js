import { legacy_createStore as createStore} from 'redux'
import repoReducer from './Reducer/index';

const store = createStore(
  repoReducer, {messages: [], chat: []}
);

export default store;