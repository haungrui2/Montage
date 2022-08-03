import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import {
    persistReducer
} from 'redux-persist';
import userIdReducer from "./userId";
import profile from "./profile";
import userPreference from "./userPreference";

const persistConfig = {
    key: 'counter',
    storage,
};

const reducers = combineReducers({
    userIdReducer,
    profile,
    userPreference});

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;

