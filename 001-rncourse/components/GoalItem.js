import { View, Text, StyleSheet, Pressable } from 'react-native';
import React from 'react';

const GoalItem = ({ itemData, onDeleteGoal }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: '#ddd' }}
        onPress={onDeleteGoal.bind(this, itemData.item.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{itemData.item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white',
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});

export default GoalItem;
