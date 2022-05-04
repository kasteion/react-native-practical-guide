import { StyleSheet, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExpense,
  removeExpense,
  editExpense,
  increaseNext,
} from "../store/redux/expenses";
import Expense from "../models/Expense";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";

const ExpenseFormScreen = ({ navigation, route }) => {
  const expenseId = useSelector((state) => state.expenses.nextId);
  const dispatch = useDispatch();

  const isAddExpense = route.name === "AddExpense";
  const selectedExpense = route.params?.expenseData;

  function cancelHandler() {
    navigation.goBack();
  }

  function addHandler(expenseData) {
    dispatch(
      addExpense(
        new Expense(
          expenseId,
          expenseData.description,
          expenseData.date,
          expenseData.amount
        )
      )
    );
    dispatch(increaseNext());
    navigation.goBack();
  }

  function updateHandler(expenseData) {
    dispatch(
      editExpense(
        new Expense(
          selectedExpense.id,
          expenseData.description,
          expenseData.date,
          expenseData.amount
        )
      )
    );
    navigation.goBack();
  }

  function deleteHandler() {
    dispatch(removeExpense(selectedExpense.id));
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        isAddExpense={isAddExpense}
        onCancel={cancelHandler}
        onSubmit={isAddExpense ? addHandler : updateHandler}
        onDelete={deleteHandler}
        defaultValues={selectedExpense}
      />
    </View>
  );
};

export default ExpenseFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputName: {
    fontSize: 16,
    color: "white",
  },
  input: {
    backgroundColor: GlobalStyles.colors.primary100,
    width: "70%",
    borderRadius: 5,
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
    color: GlobalStyles.colors.primary500,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 20,
  },
  deleteButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopColor: GlobalStyles.colors.primary100,
    borderTopWidth: 2,
    paddingVertical: 20,
    marginHorizontal: 20,
  },
});
