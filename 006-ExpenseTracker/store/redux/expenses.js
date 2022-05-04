import { createSlice } from "@reduxjs/toolkit";
import Expense from "../../models/Expense";

const initialState = {
  nextId: 4,
  expenses: [
    new Expense(1, "A book", new Date("2022-02-19T00:00:00"), 14.99),
    new Expense(2, "Another book", new Date("2022-02-18T00:00:00"), 18.59),
    new Expense(3, "Another book", new Date("2022-04-24T00:00:00"), 18.59),
  ],
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
    increaseNext: (state) => {
      state.nextId = state.nextId + 1;
    },
  },
});

export const { addExpense, removeExpense, editExpense, increaseNext } =
  expensesSlice.actions;

export default expensesSlice.reducer;
