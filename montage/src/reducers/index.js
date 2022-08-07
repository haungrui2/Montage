import { combineReducers } from 'redux';
import upload from "./upload";
import search from "./search";

const rootReducer = combineReducers({
    upload,
    search
});

export default rootReducer;
