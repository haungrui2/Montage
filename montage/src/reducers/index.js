import { combineReducers } from 'redux';
import navbar from "./navbar";
import upload from "./upload";
import search from "./search";

const rootReducer = combineReducers({
    navbar,
    upload,
    search
});

export default rootReducer;