import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../../api/auth/index";
import { fetchUserData } from "./userSlice";
import { fetchBalance } from "./balanceSlice";


const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    isLoggedIn: false,
    error: null, 
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.token = null;
      state.isLoggedIn = false;
      state.error = action.payload;
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

export const login = (formData) => async (dispatch) => {
  try {
    const response = await loginUser(formData)
    if(response.status === 0){
      dispatch(fetchUserData(response.data.token))
      dispatch(fetchBalance(response.data.token))
      return dispatch(loginSuccess(response.data));
    }
    else{
      return dispatch(loginFailure(response.message));
    }
  } catch (error) {
    console.log(error)
  }
} 

export default authSlice.reducer;
