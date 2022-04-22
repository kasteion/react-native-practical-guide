// We can use the Platform api to write special styles for android and for ios
import { StyleSheet, Text, Platform } from 'react-native';
import React from 'react';

const Title = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    // Maybe we want to show a border on android but not in ios
    // we can do it like this
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    // or like this:
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    padding: 12,
    // The element will be 300px unless that is more than 80%
    // Precentage units and min and max are useful for smaller screens
    maxWidth: '80%',
    width: 300,
  },
});
