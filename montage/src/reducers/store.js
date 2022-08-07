import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './index';
import moviesReducer from './movies/reducer';
import commentsReducer from './comments/reducer';
import usersReducer from './users/reducer';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import persistedReducer from "./presist";

export const store = configureStore({
    reducer: {
        movies: moviesReducer,
        comments: commentsReducer,
        users: usersReducer,
        others: rootReducer,
        persistReducer: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
    devTools: true
});