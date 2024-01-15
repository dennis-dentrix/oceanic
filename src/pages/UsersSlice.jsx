import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: [],
  isLoadingUserData: false,
};

const userSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    newUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const createProfile = (state) => {
  console.log(state.user);
};

export const { newUser } = userSlice.actions;

export default userSlice.reducer;
