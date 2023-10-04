import { createSlice } from "@reduxjs/toolkit";
import { getUser } from "../../api/user";

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

export const fetchUserData = (token) => async (dispatch) => {
  try {
    const response = await getUser(token)
    console.log(response)
    if(response.status === 0){
      return dispatch(setUser(response));
    }
    else{
      return dispatch(setUser(response.message));
    }
  } catch (error) {
    
  }
}

export const {setUser,logOutUser} = userSlice.actions;

export default userSlice.reducer;
