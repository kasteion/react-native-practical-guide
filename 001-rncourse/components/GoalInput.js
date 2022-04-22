import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';

const GoalInput = ({ addGoalHandler: onGoalAdd, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    onGoalAdd(enteredGoalText);
    setEnteredGoalText('');
    onCancel(!visible);
  };

  const cancelHandler = () => {
    onCancel(!visible);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
          placeholderTextColor="#120438"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelHandler} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  buttonContainer: {
    flexDirection: 'row',
    padding: 15,
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    width: '100%',
    padding: 16,
    color: '#120438',
    borderRadius: 15,
  },
});

export default GoalInput;
