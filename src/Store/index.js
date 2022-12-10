import { legacy_createStore as createStore} from 'redux'
import repoReducer from './Reducer/index';

const store = createStore(
  repoReducer,
);

export default store;