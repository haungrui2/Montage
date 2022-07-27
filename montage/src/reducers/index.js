import { combineReducers } from 'redux';
import navbar from "./navbar";
import upload from "./upload";
import search from "./search";
import profile from "./profile";
import userIdReducer from "./userId";

const rootReducer = combineReducers({
    navbar,
    upload,
    search,
    userIdReducer,
    profile
});

export default rootReducer;
