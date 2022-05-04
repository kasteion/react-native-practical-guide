import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import ExpenseDetail from "./ExpenseDetail";

const ExpensesList = ({ expenses }) => {
  function renderExpenseDetail(itemData) {
    const item = itemData.item;
    const expenseData = {
      id: item.id,
      description: item.description,
      date: item.date.toISOString().slice(0, 10),
      amount: item.amount,
    };
    return <ExpenseDetail expenseData={expenseData} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={expenses}
        renderItem={renderExpenseDetail}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ExpensesList;

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
});
