import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import moviesReducer from './movies/reducer';
import commentsReducer from './comments/reducer';
import usersReducer from './users/reducer';
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    comments: commentsReducer,
    users: usersReducer,
    others: rootReducer
  },
  devTools: true
});