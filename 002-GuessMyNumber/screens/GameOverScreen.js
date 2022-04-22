import { View, Image, Text, StyleSheet } from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text style={styles.sumaryText}>
        Your phone needed <Text style={styles.highligh}>{roundsNumber}</Text>{' '}
        rounds to guess the number{' '}
        <Text style={styles.highligh}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: Colors.primary700,
    margin: 36,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  sumaryText: {
    fontFamily: 'open-sans',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 24,
  },
  highligh: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500,
  },
});

export default GameOverScreen;
