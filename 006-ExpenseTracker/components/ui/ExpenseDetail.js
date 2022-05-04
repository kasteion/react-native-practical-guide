import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { GlobalStyles } from "../../constants/styles";

const ExpenseDetail = ({ expenseData }) => {
  const navigation = useNavigation();

  function pressHandler() {
    navigation.navigate("EditExpense", { expenseData });
  }

  return (
    <Pressable
      onPress={pressHandler}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View style={styles.container}>
        <View>
          <Text style={styles.expenseDetailDescription}>
            {expenseData.description}
          </Text>
          <Text style={styles.expenseDetailDate}>{expenseData.date}</Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>
            {/* {expenseData.amount.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })} */}
            ${expenseData.amount.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseDetail;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    backgroundColor: GlobalStyles.colors.primary500,
    borderRadius: 10,
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    elevation: 4,
    shadowColor: GlobalStyles.colors.gray500,
    shadowRadius: 4,
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
  },
  expenseDetailDescription: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    marginVertical: 5,
  },
  expenseDetailDate: {
    color: "white",
  },
  priceContainer: {
    backgroundColor: "white",
    borderRadius: 5,
    minWidth: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  priceText: {
    color: GlobalStyles.colors.primary500,
    fontWeight: "bold",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.3,
  },
});
