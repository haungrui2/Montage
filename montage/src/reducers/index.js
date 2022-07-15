import { combineReducers } from 'redux';
import navbar from "./navbar";
import upload from "./upload";

const rootReducer = combineReducers({
    navbar,
    upload
});

export default rootReducer;