import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import {addCommentAsync, deleteCommentAsync, getCommentsAsync} from './thunks';

const INITIAL_STATE = {
  moviesComments: {MovieTitle:"", commentList: [], totalRate: 0, averageRate:0},
  getComments: REQUEST_STATE.IDLE,
  addComments: REQUEST_STATE.IDLE,
  deleteComments: REQUEST_STATE.IDLE,
  error: null
};

const usersSlice = createSlice({
  name: 'comments',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCommentsAsync.pending, (state) => {
        state.getComments = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getCommentsAsync.fulfilled, (state, action) => {
        state.getComments = REQUEST_STATE.FULFILLED;
        state.moviesComments = action.payload;
        console.log(action.payload)
      })
      .addCase(getCommentsAsync.rejected, (state, action) => {
        state.getComments = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
        .addCase(addCommentAsync.pending, (state) => {
          state.addComments = REQUEST_STATE.PENDING;
          state.error = null;
        })
        .addCase(addCommentAsync.fulfilled, (state, action) => {
          state.addComments = REQUEST_STATE.FULFILLED;
          state.moviesComments = action.payload;
        })
        .addCase(addCommentAsync.rejected, (state, action) => {
          state.addComments = REQUEST_STATE.REJECTED;
          state.error = action.error;
        })
        .addCase(deleteCommentAsync.pending, (state) => {
          state.deleteComments = REQUEST_STATE.PENDING;
          state.error = null;
        })
        .addCase(deleteCommentAsync.fulfilled, (state, action) => {
          state.deleteComments = REQUEST_STATE.FULFILLED;
          state.moviesComments = action.payload;
        })
        .addCase(deleteCommentAsync.rejected, (state, action) => {
          state.deleteComments = REQUEST_STATE.REJECTED;
          state.error = action.error;
        })
  }
});

export default usersSlice.reducer;