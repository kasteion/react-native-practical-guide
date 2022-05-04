import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

const TYPE = {
  GO: "go",
};

const Button = ({ type, text, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => (pressed ? styles.pressed : null)}
    >
      <View
        style={[
          type === TYPE.GO ? styles.goContainer : styles.stopContainer,
          () => null,
        ]}
      >
        <Text style={type === TYPE.GO ? styles.goText : styles.stopText}>
          {text}
        </Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  stopContainer: {
    width: 100,
    padding: 10,
    marginHorizontal: 20,
  },
  stopText: {
    textAlign: "center",
    color: "#d8cdf7",
    fontSize: 16,
  },
  goContainer: {
    width: 100,
    padding: 10,
    backgroundColor: "#601cff",
    marginHorizontal: 20,
    borderRadius: 5,
  },
  goText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
  },
  pressed: {
    opacity: 0.3,
  },
});
