import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

function reducerFunction(total, expense) {
  return total + expense.amount;
}

const ExpensesTotal = ({ filterExpenses, expenses }) => {
  const total = expenses.reduce(reducerFunction, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.expenseDescription}>
        {filterExpenses ? "Last 7 Days" : "Total"}
      </Text>
      <Text style={styles.expenseTotal}>
        {/* {total.toLocaleString("en-US", { style: "currency", currency: "USD" })} */}
        ${total.toFixed(2)}
      </Text>
    </View>
  );
};

export default ExpensesTotal;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: GlobalStyles.colors.primary50,
    borderRadius: 10,
    height: 40,
    paddingHorizontal: 15,
  },
  expenseDescription: {
    color: GlobalStyles.colors.primary400,
    fontSize: 12,
  },
  expenseTotal: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    fontSize: 16,
  },
});
