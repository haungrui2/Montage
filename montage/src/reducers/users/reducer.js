import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { editFavouriteMovieAsync, recommendMovieAsync, addUserAvatarAsync } from './thunks';

const INITIAL_STATE = {
  recommendMovie: [],
  editReport: [],
  editUserFavouriteMovies: REQUEST_STATE.IDLE,
  UserRecommend: REQUEST_STATE.IDLE,
  addAvatar: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'users',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(editFavouriteMovieAsync.pending, (state) => {
        state.editUserFavouriteMovies = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editFavouriteMovieAsync.fulfilled, (state, action) => {
        state.editUserFavouriteMovies = REQUEST_STATE.FULFILLED;
        state.editReport = action.payload;
      })
      .addCase(editFavouriteMovieAsync.rejected, (state, action) => {
        state.editUserFavouriteMovies = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(recommendMovieAsync.pending, (state) => {
        state.UserRecommend = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(recommendMovieAsync.fulfilled, (state, action) => {
        state.UserRecommend = REQUEST_STATE.FULFILLED;
        state.recommendMovie = action.payload;
      })
      .addCase(recommendMovieAsync.rejected, (state, action) => {
        state.UserRecommend = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addUserAvatarAsync.pending, (state) => {
        state.addAvatar = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addUserAvatarAsync.fulfilled, (state, action) => {
        state.addAvatar = REQUEST_STATE.FULFILLED;
        state.error = null;
      })
      .addCase(addUserAvatarAsync.rejected, (state, action) => {
        state.addAvatar = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export default usersSlice.reducer;