// Here we can use the Dimensions api to change the styles by deviceHeight
// This is what will change with the orientation
// We will not use Dimensions but the useWindowDimensions hook

// KeyboardAvoidingView can be used to wrap the component
// to make it scrollable when the keyboard opens
// and if you tap somewhere else it closes the screen
import {
  View,
  TextInput,
  StyleSheet,
  Alert,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  // Like all reacts hooks we use it in a functional react component
  // This hook observes the device dimensions and changes with orientation
  const { width, height } = useWindowDimensions();

  const numberInputHandler = (e) => {
    setEnteredNumber(e);
  };

  const resetInputHandler = () => {
    setEnteredNumber('');
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert...
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ]
      );
      return;
    }

    onPickNumber(chosenNumber);
  };

  // This one will get execute every time the components renders
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <ScrollView style={styles.screen}>
      {/* behaviour is height, padding or position */}
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
          <View>
            <Title>Guess My Number</Title>
          </View>
          <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
              style={styles.numberInput}
              maxLength={2}
              keyboardType="number-pad"
              autoCapitalize="none"
              value={enteredNumber}
              onChangeText={numberInputHandler}
            />
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
              </View>
              <View style={styles.buttonContainer}>
                <PrimaryButton onPress={confirmInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

// This code is not executed again... only once when this screen is loded
// This will not work with the user changing orientation with the app open.
// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // Here we can use the height
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
  numberInput: {
    height: 50,
    fontSize: 32,
    width: 50,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default StartGameScreen;
