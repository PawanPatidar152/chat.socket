import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      console.log("payload",action.payload)
      const newUser = {
        ...action.payload,
        userId: nanoid(),
      };
      state.users.push(newUser);
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
