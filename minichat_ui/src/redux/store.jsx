import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import themeReducer from "./reducers/themeReducer";
import userReducer from './userSlice'; 
import loginUsersReducer from './loginUsersSlice';
import searchMessageReducer from "./reducers/searchMessageReducer";

const rootReducer = combineReducers({
  messages: messageReducer,
  theme: themeReducer,
  usersData: userReducer, 
  loginsData: loginUsersReducer,
  SearchMessage:searchMessageReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
