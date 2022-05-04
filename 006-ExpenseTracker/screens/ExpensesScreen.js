import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import ExpensesTotal from "../components/ui/ExpensesTotal";
import ExpensesList from "../components/ui/ExpensesList";
import { GlobalStyles } from "../constants/styles";

const sevenDays = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

const ExpensesScreen = ({ navigation, route }) => {
  const filterExpenses = route.name === "RecentExpenses";
  const allExpenses = useSelector((state) => state.expenses.expenses);
  const expenses = filterExpenses
    ? allExpenses.filter((expense) => expense.date >= sevenDays)
    : allExpenses;

  return (
    <View style={styles.container}>
      <ExpensesTotal filterExpenses={filterExpenses} expenses={expenses} />
      <ExpensesList expenses={expenses} />
    </View>
  );
};

export default ExpensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: GlobalStyles.colors.primary700,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
});
