import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    error: null, 
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.data.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      state.error = action.payload.message;
    },
    registerSuccess: (state, action) => {
      state.token = action.payload;
      state.isLoggedIn = false;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      state.error = action.payload.data.message;
    },
    logout: (state) => {
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
    },
  },
});

export const {
  loginSuccess,
  loginFailure,
  registerSuccess,
  registerFailure,
  logout,
} = authSlice.actions;

export default authSlice.reducer;
