import { combineReducers } from 'redux';
import navbar from "./navbar";
import upload from "./upload";
import search from "./search";
import profile from "./profile";
import userId from "./userId";

const rootReducer = combineReducers({
    navbar,
    upload,
    search,
    userId,
    profile
});

export default rootReducer;
