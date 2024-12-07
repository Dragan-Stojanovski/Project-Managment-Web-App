/*
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
const store = createStore(rootReducer, applyMiddleware(thunk));
*/
import { thunk } from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
export default store;
