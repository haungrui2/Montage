import {createAsyncThunk} from '@reduxjs/toolkit';
import {actionTypes} from './actionTypes';
import MoviesService from './service';

export const getMoviesAsync = createAsyncThunk(
    actionTypes.GET_MOVIES,
    async (query) => {
        return await MoviesService.getMovies(query);
    }
);

export const getMovieAsync = createAsyncThunk(
    actionTypes.GET_MOVIE,
    async (movie) => {
        return await MoviesService.getMovie(movie);
    }
);

export const addMovieAsync = createAsyncThunk(
    actionTypes.ADD_MOVIE,
    async (movie) => {
        return await MoviesService.addMovie(movie);
    }
);

export const editMovieAsync = createAsyncThunk(
    actionTypes.EDIT_MOVIE,
    async (movie) => {
        return await MoviesService.editMovie(movie);
    }
);

export const randomMovieAsync = createAsyncThunk(
    actionTypes.GET_RANDOM,
    async (movie) => {
        return await MoviesService.getRandomMovie(movie);
    }
);

