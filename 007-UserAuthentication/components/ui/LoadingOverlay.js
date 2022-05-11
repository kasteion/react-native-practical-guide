import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";

const LoadingOverlay = ({ message }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{message}</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
};

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary100,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: Colors.primary800,
    fontWeight: "bold",
    marginVertical: 24,
  },
});
