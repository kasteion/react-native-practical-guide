import axios from "axios";
import Expense from "../models/Expense";

const BACKEND_URL =
  "https://practical-react-native-fbcbf-default-rtdb.firebaseio.com";

const instance = axios.create({ baseURL: BACKEND_URL, timeout: 5000 });

export async function storeExpense(expenseData) {
  const response = await instance.post(
    `${BACKEND_URL}/expenses.json`,
    expenseData
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await instance.get(`${BACKEND_URL}/expenses.json`);
  const expenses = [];
  for (const key in response.data) {
    const expenseObj = new Expense(
      key,
      response.data[key].description,
      new Date(response.data[key].date),
      response.data[key].amount
    );
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return instance.put(`${BACKEND_URL}/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return instance.delete(`${BACKEND_URL}/expenses/${id}.json`);
}
