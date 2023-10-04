import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.data;
      state.error = null;
    },
    logOutUser: (state) => {
      state.user = null;
      state.error = null;
    }
  },
});

export const {setUser,logOutUser} = userSlice.actions;

export default userSlice.reducer;
