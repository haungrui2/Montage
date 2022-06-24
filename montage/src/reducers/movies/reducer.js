import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getMoviesAsync} from './thunks';

const INITIAL_STATE = {
  movies: [],
  getMovies: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'movies',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMoviesAsync.pending, (state) => {
        state.getMovies = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getMoviesAsync.fulfilled, (state, action) => {
        state.getMovies = REQUEST_STATE.FULFILLED;
        state.movies = action.payload;
      })
      .addCase(getMoviesAsync.rejected, (state, action) => {
        state.getMovies = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export default usersSlice.reducer;