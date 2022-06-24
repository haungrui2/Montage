import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import moviesReducer from './movies/reducer';
import commentsReducer from './comments/reducer';
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    comments: commentsReducer,
    others: rootReducer
  },
  devTools: true
});