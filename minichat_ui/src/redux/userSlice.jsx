import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        ...action.payload,
        userId: nanoid(),
      };
      state.users.push(newUser);
    },
    updateAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
