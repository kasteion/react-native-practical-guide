import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ExpensesTotal from "../components/ui/ExpensesTotal";
import ExpensesList from "../components/ui/ExpensesList";
import { GlobalStyles } from "../constants/styles";
import { fetchExpenses } from "../util/http";
import { setExpenses } from "../store/redux/expenses";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const sevenDays = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);

const ExpensesScreen = ({ navigation, route }) => {
  const [isFetching, setIsFetching] = useState(true);
  const [error, setError] = useState();

  const filterExpenses = route.name === "RecentExpenses";
  const allExpenses = useSelector((state) => state.expenses.expenses);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      try {
        const expenses = await fetchExpenses();
        dispatch(setExpenses(expenses));
      } catch (error) {
        setError("Could not fetch expenses!");
      }
      setIsFetching(false);
    }
    getExpenses();
  }, []);

  function errorHandler() {
    setError(null);
    // Or try to fetch again
  }

  if (error && !isFetching) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }
  if (isFetching) {
    return <LoadingOverlay />;
  }

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
