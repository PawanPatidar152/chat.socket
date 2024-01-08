import { combineReducers } from "redux";

import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./messageReducer";
import themeReducer from "./themeReducer";

const rootReducer = combineReducers({
  messages: messageReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
