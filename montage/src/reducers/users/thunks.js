import { createAsyncThunk } from '@reduxjs/toolkit';
import { actionTypes } from './actionTypes';
import Userservices from './service';

export const editFavouriteMovieAsync = createAsyncThunk(
    actionTypes.EDIT_LIKEDMOVIES,
    async (editData) => {
      return await Userservices.editFavouriteMovie(editData);
    }
  );
  
export const recommendMovieAsync = createAsyncThunk(
    actionTypes.EDIT_RECOMMEND,
    async (userId) => {
      return await Userservices.recommendMovie({userId});
    }
);