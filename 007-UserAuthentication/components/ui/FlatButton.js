import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Colors } from "../../constants/styles";

const FlatButton = ({ label, onPress, containerStyle, labelStyle }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={[styles.container, containerStyle]}>
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default FlatButton;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    margin: 10,
    padding: 10,
  },
  label: {
    color: Colors.primary100,
  },
  pressed: {
    opacity: 0.3,
  },
});
