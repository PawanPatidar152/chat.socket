import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  logedInUsers: [],
};

export const logedInSlice = createSlice({
  name: "logedInUsers",
  initialState,
  reducers: {
    addlogedInUser: (state, action) => {
      console.log("payload", action.payload);
      const newUser = {
        ...action.payload,
        userId: nanoid(),
      };
      state.logedInUsers.push(newUser);
    },
  },
});

export const { addlogedInUser } = logedInSlice.actions;
export default logedInSlice.reducer;
