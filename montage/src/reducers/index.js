import { combineReducers } from 'redux';
import comments from "./comments";
import navbar from "./navbar";

const rootReducer = combineReducers({
    comments,
    navbar
});

export default rootReducer;