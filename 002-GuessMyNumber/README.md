# Creating the Project

> expo init 002GuessMyNumber

# Structure

- screens
  - StartGameScreen.js
  - GameScreen.js
  - GameOverScreen.js
- components

# Install packages with expo install

> expo install expo-linear-gradient

# Respecting Device Screen Restriction With the SafeAreaView

SafeAreaView Automatically detects the safe area, because some phones have notches

# Adding Icons

```js
import { Ionicons } from '@expo/vector-icons';
```

# Custom fonts

> expo install expo-font

> expo install expo-app-loading

Create an assets/fonts directories:

To load the fonts in the App.js

```js
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  // ...
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //...
}
```

To use the custom fonts

```js
const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
  },
});
```
