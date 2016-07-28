

import { combineReducers } from "redux";

import posterReducer    from "./poster";

let posterApp = combineReducers({
    poster: posterReducer
});

export default posterApp;
