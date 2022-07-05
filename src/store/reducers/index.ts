import { combineReducers } from '@reduxjs/toolkit';
import booksApi from '@services/booksApi';
import booksReducer from './books';

const rootReducer = combineReducers({
  books: booksReducer,
  [booksApi.reducerPath]: booksApi.reducer,
});

export default rootReducer;
