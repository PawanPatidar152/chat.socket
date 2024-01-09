import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import messageReducer from "./reducers/messageReducer";
import themeReducer from "./reducers/themeReducer";
import userReducer from './userSlice'; 
import loginUsersReducer from './loginUsersSlice';

const rootReducer = combineReducers({
  messages: messageReducer,
  theme: themeReducer,
  usersData: userReducer, 
  loginsData: loginUsersReducer,

});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
