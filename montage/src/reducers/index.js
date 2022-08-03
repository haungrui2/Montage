import { combineReducers } from 'redux';
import upload from "./upload";
import search from "./search";
import profile from "./profile";
import userIdReducer from "./userId";
import userPreference from "./userPreference";


const rootReducer = combineReducers({
    upload,
    search,
    // userIdReducer,
    // profile,
    // userPreference
});

export default rootReducer;
