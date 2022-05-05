import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      state.expenses.push(action.payload);
    },
    removeExpense: (state, action) => {
      const filtered = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
      state.expenses = filtered;
    },
    editExpense: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload;
        } else {
          return expense;
        }
      });
    },
    setExpenses: (state, action) => {
      const inverted = action.payload.reverse();
      state.expenses = inverted;
    },
  },
});

export const { addExpense, removeExpense, editExpense, setExpenses } =
  expensesSlice.actions;

export default expensesSlice.reducer;
