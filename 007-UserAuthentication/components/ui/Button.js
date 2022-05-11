import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";
import FlatButton from "./FlatButton";

const Button = ({ label, onPress }) => {
  return (
    <FlatButton
      label="Log In"
      onPress={onPress}
      containerStyle={styles.container}
      labelStyle={styles.label}
    />
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary500,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
