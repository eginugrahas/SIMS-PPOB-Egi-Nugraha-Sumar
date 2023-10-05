import { createSlice } from "@reduxjs/toolkit";
import { getUser, updateUser } from "../../api/user";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload.data;
      state.error = null;
    },
    logOutUser: (state) => {
      state.data = null;
      state.error = null;
    },
    updateUserSuccess: (state, action) => {
      state.data = action.payload.data;
      state.error = null;
    },
    updateUserFailure: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const fetchUserData = (token) => async (dispatch) => {
  try {
    const response = await getUser(token)
    console.log(response, "response")
    if(response.status === 0){
      return dispatch(setUser(response));
    }
    else{
      return dispatch(setUser(response.message));
    }
  } catch (error) {
    console.log(error, "error")
  }
}

export const updateUserData = (token, updatedUserData) => async (dispatch) => {
  try {
    const response = await updateUser(token, updatedUserData); // Use your API function for updating user data
    if (response.status === 0) {
      return dispatch(updateUserSuccess(response));
    } else {
      return dispatch(updateUserFailure(response.message));
    }
  } catch (error) {
    console.log(error, "error")
  }
};

export const {setUser,logOutUser, updateUserSuccess, updateUserFailure} = userSlice.actions;

export default userSlice.reducer;
