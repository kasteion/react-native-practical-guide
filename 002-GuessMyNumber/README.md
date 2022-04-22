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

# Screen Orientation

The app currently is locked to portrait mode, this is configured in the app.json file

```json
"orientation": "portrait"
```

If we set the orientation to default then the app could be in landscape mode

```json
"orientation": "default"
```

There is portrait, landscape and default mode

# Platform-specific Code with the Platform API

If we create the same component but with the names Title.android.js and Title.ios.js. Then when we import Title from 'Title'... React Native loads the android or the ios file depending on the platform.

We can use it with utils too, like with colors.js creating two files... colors.android.js and colors.ios.js
