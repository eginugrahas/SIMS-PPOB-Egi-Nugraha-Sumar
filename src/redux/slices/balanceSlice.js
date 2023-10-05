import { createSlice } from "@reduxjs/toolkit";
import { getBalance } from "../../api/transactions";

const balanceSlice = createSlice({
  name: "balacne",
  initialState: {
    balance: null,
    error: null,
  },
  reducers: {
    setBalance: (state, action) => {
      state.balance = action.payload.balance;
      state.error = null;
    },
    rejectedBalance: (state, action) => {
      state.balance = null;
      state.error = action.payload;
    }
  },
});

export const fetchBalance = (token) => async (dispatch) => {
  try {
    const balance = await getBalance(token);
    if (balance.status === 0) {
      return dispatch(
        setBalance({ balance: balance.data.balance })
      );
    } else {
      return dispatch(rejectedBalance(balance.data.message));
    }
  } catch (error) {
    console.log(error);
    return dispatch(rejectedBalance(error));
  }
};

export const { setBalance, rejectedBalance } = balanceSlice.actions;

export default balanceSlice.reducer;
