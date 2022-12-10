import { configureStore } from "@reduxjs/toolkit";
import repoReducer from './Reducer/index';

const store = configureStore(
  repoReducer,
);

export default store;