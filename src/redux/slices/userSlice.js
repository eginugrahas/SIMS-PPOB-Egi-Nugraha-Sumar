import { createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../api/index"; 

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null, 
    error: null, 
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    registerSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    registerFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
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
} = userSlice.actions;


export const register = (formData) => async (dispatch) => {
  try {
    const user = await registerUser(formData);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
};

export default userSlice.reducer;
