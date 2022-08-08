import {createAsyncThunk} from '@reduxjs/toolkit';
import {actionTypes} from './actionTypes';
import CommentsService from './service';

export const getCommentsAsync = createAsyncThunk(
    actionTypes.GET_COMMENTS,
    async (movieTitle) => {
        return await CommentsService.getComments(movieTitle);
    }
);

export const addCommentAsync = createAsyncThunk(
    actionTypes.ADD_COMMENT,
    async (comment) => {
        return await CommentsService.addComment(comment);
    }
);

export const deleteCommentAsync = createAsyncThunk(
    actionTypes.DELETE_COMMENT,
    async (comment) => {
        return await CommentsService.deleteComment(comment);
    }
);