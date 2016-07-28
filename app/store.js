

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import posterApp from "./reducers";

let store = createStore(
    posterApp,
    applyMiddleware(thunk)
);

export default store;
