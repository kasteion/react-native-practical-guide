// Use the Dimensions api to change the styles based of device width o height
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

// screen or window. screen includes status bar window doen't
// Get the device width
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    // padding: 24,
    padding: deviceWidth < 380 ? 12 : 24,
    // margin: 24,
    margin: deviceWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    fontFamily: 'open-sans-bold',
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
  },
});
