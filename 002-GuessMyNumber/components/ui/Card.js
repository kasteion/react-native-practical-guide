import { StyleSheet, View } from 'react-native';
import React from 'react';
import Colors from '../../constants/colors';

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    padding: 16,
    marginTop: 36,
    backgroundColor: Colors.primary700,
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 4,
      height: 4,
    },
  },
});
