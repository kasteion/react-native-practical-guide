import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExpense,
  removeExpense,
  editExpense,
  increaseNext,
} from "../store/redux/expenses";
import Button from "../components/ui/Button";
import IconButton from "../components/ui/IconButton";
import Expense from "../models/Expense";
import { GlobalStyles } from "../constants/styles";

const ExpenseFormScreen = ({ navigation, route }) => {
  const expenseId = useSelector((state) => state.expenses.nextId);
  const expenses = useSelector((state) => state.expenses.expenses);
  const [id, setId] = useState();
  const [description, setDescription] = useState();
  const [date, setDate] = useState();
  const [amount, setAmount] = useState();
  const dispatch = useDispatch();

  const isAddExpense = route.name === "AddExpense";

  useEffect(() => {
    if (!isAddExpense) {
      const { expenseData } = route.params;
      setId(expenseData.id);
      setDescription(expenseData.description);
      setDate(expenseData.date);
      setAmount(expenseData.amount.toString());
    }
  }, [isAddExpense]);

  function cancelHandler() {
    navigation.goBack();
  }

  function addHandler() {
    dispatch(
      addExpense(
        new Expense(
          expenseId,
          description,
          new Date(date + "T00:00:00"),
          Number(amount)
        )
      )
    );
    dispatch(increaseNext());
    navigation.goBack();
  }

  function updateHandler() {
    dispatch(
      editExpense(
        new Expense(
          id,
          description,
          new Date(date + "T00:00:00"),
          Number(amount)
        )
      )
    );
    navigation.goBack();
  }

  function deleteHandler() {
    dispatch(removeExpense(id));
    navigation.goBack();
  }

  function RenderButtons() {
    if (isAddExpense) {
      return (
        <>
          <View style={styles.buttonContainer}>
            <Button type="cancel" text="Cancel" onPress={cancelHandler} />
            <Button type="go" text="Add" onPress={addHandler} />
          </View>
        </>
      );
    } else {
      return (
        <>
          <View style={styles.buttonContainer}>
            <Button type="cancel" text="Cancel" onPress={cancelHandler} />
            <Button type="go" text="Update" onPress={updateHandler} />
          </View>
          <View style={styles.deleteButtonContainer}>
            <IconButton
              name="trash"
              color={GlobalStyles.colors.error500}
              size={32}
              onPress={deleteHandler}
            />
          </View>
        </>
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Description:</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={(e) => setDescription(e)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Date:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numbers-and-punctuation"
          value={date}
          onChangeText={(e) => setDate(e)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputName}>Amount:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={(e) => setAmount(e)}
        />
      </View>
      <RenderButtons />
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
