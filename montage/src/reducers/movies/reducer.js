import { createSlice } from '@reduxjs/toolkit';
import { REQUEST_STATE } from '../utils';
import { getMoviesAsync, getMovieAsync, addMovieAsync, editMovieAsync} from './thunks';

const INITIAL_STATE = {
  movies: [],
  selectedMovie: {MovieTitle: "",
    MovieYear: 0,
    MovieDirector: "",
    MovieWriter: "",
    MovieGenre: [],
    MovieDescription: "",
    movieId: "",
    imageData: ""},
  getMovies: REQUEST_STATE.IDLE,
  getMovie: REQUEST_STATE.IDLE,
  addMovie: REQUEST_STATE.IDLE,
  editMovie: REQUEST_STATE.IDLE,
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
      .addCase(getMovieAsync.pending, (state) => {
        state.getMovie = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(getMovieAsync.fulfilled, (state, action) => {
        state.getMovie = REQUEST_STATE.FULFILLED;
        state.selectedMovie = action.payload;
      })
      .addCase(getMovieAsync.rejected, (state, action) => {
        state.getMovie = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(addMovieAsync.pending, (state) => {
        state.addMovie = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(addMovieAsync.fulfilled, (state, action) => {
        state.addMovie = REQUEST_STATE.FULFILLED;
        state.movies = action.payload;
      })
      .addCase(addMovieAsync.rejected, (state, action) => {
        state.addMovie = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
      .addCase(editMovieAsync.pending, (state) => {
        state.editMovie = REQUEST_STATE.PENDING;
        state.error = null;
      })
      .addCase(editMovieAsync.fulfilled, (state, action) => {
        state.editMovie = REQUEST_STATE.FULFILLED;
        state.movies = action.payload;
      })
      .addCase(editMovieAsync.rejected, (state, action) => {
        state.editMovie = REQUEST_STATE.REJECTED;
        state.error = action.error;
      })
  }
});

export default usersSlice.reducer;