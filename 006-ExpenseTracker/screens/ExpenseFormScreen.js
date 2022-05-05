import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addExpense,
  removeExpense,
  editExpense,
} from "../store/redux/expenses";
import Expense from "../models/Expense";
import { GlobalStyles } from "../constants/styles";
import ExpenseForm from "../components/ManageExpense/ExpenseForm";
import { deleteExpense, storeExpense, updateExpense } from "../util/http";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import ErrorOverlay from "../components/ui/ErrorOverlay";

const ExpenseFormScreen = ({ navigation, route }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const isAddExpense = route.name === "AddExpense";
  const selectedExpense = route.params?.expenseData;

  function cancelHandler() {
    navigation.goBack();
  }

  async function addHandler(expenseData) {
    setIsSubmitting(true);
    try {
      const id = await storeExpense(expenseData);
      dispatch(
        addExpense(
          new Expense(
            id,
            expenseData.description,
            expenseData.date,
            expenseData.amount
          )
        )
      );
      navigation.goBack();
    } catch (error) {
      setError("Could not save the data!");
    }
    setIsSubmitting(false);
  }

  async function updateHandler(expenseData) {
    setIsSubmitting(true);
    try {
      await updateExpense(selectedExpense.id, expenseData);
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
    } catch (error) {
      setError("Could not update the data!");
    }
    setIsSubmitting(false);
  }

  async function deleteHandler() {
    setIsSubmitting(true);
    try {
      await deleteExpense(selectedExpense.id);
      dispatch(removeExpense(selectedExpense.id));
      navigation.goBack();
    } catch (error) {
      setError("Could not delete expense!");
    }
    setIsSubmitting(false);
  }

  function errorHandler() {
    setError(null);
  }

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
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
