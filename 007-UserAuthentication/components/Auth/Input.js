import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";

const Input = ({ label, value, invalid, textInputConfig }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.label, invalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, , invalid && styles.inputInvalid]}
        value={value}
        {...textInputConfig}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    fontSize: 14,
    color: Colors.primary100,
    marginBottom: 5,
  },
  input: {
    backgroundColor: Colors.primary100,
    padding: 10,
    borderRadius: 5,
    color: Colors.primary800,
    fontWeight: "bold",
  },
  labelInvalid: {
    color: Colors.error500,
  },
  inputInvalid: {
    backgroundColor: Colors.error100,
  },
});
