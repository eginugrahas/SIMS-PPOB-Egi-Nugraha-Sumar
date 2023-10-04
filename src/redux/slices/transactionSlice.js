import { createSlice } from "@reduxjs/toolkit";
import { getBalance } from "../../api/transactions";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    balance: null,
    transaction: null,
    error: null,
  },
  reducers: {
    setTransaction: (state, action) => {
      state.balance = action.payload.data;
      state.transaction = action.payload.data;
      state.error = null;
    },
  },
});

export const fetchBalance = (token) => async (dispatch) => {
  try {
    const response = await getBalance(token);
    console.log(response);
    if (response.status === 0) {
      return dispatch(setTransaction(response));
    } else {
      return dispatch(setTransaction(response.message));
    }
  } catch (error) {}
};

export const { setTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
