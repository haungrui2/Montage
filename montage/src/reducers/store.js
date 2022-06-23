import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index';
import moviesReducer from './movies/reducer';
export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    others: rootReducer
  },
  devTools: true
});