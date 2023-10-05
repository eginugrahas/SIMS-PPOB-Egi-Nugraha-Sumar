import { createSlice } from "@reduxjs/toolkit";
import {  getTransactionHistory } from "../../api/transactions";

const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transaction: null,
    error: null,
  },
  reducers: {
    setTransaction: (state, action) => {
      state.transaction = action.payload;
      state.error = null;
    },
    rejectedTransaction: (state, action) => {
      state.transaction = null;
      state.error = action.payload;
    },
  },
});

export const fetchTransactions = ({token, offset}) => async (dispatch) => {
  try {
    const transaction = await getTransactionHistory(token, offset);
    console.log(transaction, "transaction in slice")
    if (transaction.status === 0) {
      return dispatch(
        setTransaction(transaction.data.records)
      );
    } else {
      return dispatch(setTransaction(transaction.data.message));
    }
  } catch (error) {
    console.log(error);
    return dispatch(setTransaction(error));
  }
};

export const { setTransaction, rejectedTransaction } = transactionSlice.actions;

export default transactionSlice.reducer;
