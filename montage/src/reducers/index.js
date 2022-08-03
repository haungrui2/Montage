import { combineReducers } from 'redux';
import upload from "./upload";
import search from "./search";
import profile from "./profile";
import userIdReducer from "./userId";
import userPreference from "./userPreference";
import userMovie from "./userMovie";

const rootReducer = combineReducers({
    upload,
    search,
    userIdReducer,
    profile,
    userPreference,
    userMovie
});

export default rootReducer;
