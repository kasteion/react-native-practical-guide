// Import the Dimensions api to get data from the device dimensions
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';
import Colors from '../constants/colors';

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;

  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageSize]}>
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
    </ScrollView>
  );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    // Seting hard coded values is regularly a bad idea
    // because we dont know the size of the device
    borderRadius: deviceWidth < 380 ? 75 : 150,
    width: deviceWidth < 380 ? 150 : 300,
    height: deviceWidth < 380 ? 150 : 300,
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