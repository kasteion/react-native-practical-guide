# Starting the project

> expo init 003-MealsApp

# The background color of the entire app

Add to the app.json file

```json
"backgroundColor": "#24180f",
```

# React Navigation Package

https://reactnavigation.org/docs/getting-started/

> yarn add @react-navigation/native

> expo install react-native-screens react-native-safe-area-context

We need to use a navigator (there are many navigators)

> yarn add @react-navigation/native-stack

There is Native Stack that uses the native elements and can be more performant. This should be the prefered one.

We can use the Stack navigator, this one emulates the native components behaviour

# In a nested component we can use the useNavigation hook

# We can Style the screen of the navigation

This would be the default

```js
<Stack.Navigator>
  <Stack.Screen name="Categories" component={CategoriesScreen} />
  <Stack.Screen name="Overview" component={MealsOverviewScreen} />
</Stack.Navigator>
```

With the options prop we can personalize the look of the screens, this would be to style individual screens

```js
<Stack.Navigator>
  <Stack.Screen
    name="Categories"
    component={CategoriesScreen}
    options={{
      title: "All Categories",
      headerStyle: { backgroundColor: "#351401" },
      headerTintColor: "white",
      contentStyle: { backgroundColor: "#3f2f25" },
    }}
  />
  <Stack.Screen name="Overview" component={MealsOverviewScreen} />
</Stack.Navigator>
```

And like this we can style the whole navigator

```js
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    contentStyle: { backgroundColor: "#3f2f25" },
  }}
>
  <Stack.Screen
    name="Categories"
    component={CategoriesScreen}
    options={{
      title: "All Categories",
    }}
  />
  <Stack.Screen name="Overview" component={MealsOverviewScreen} />
</Stack.Navigator>
```

# To set the styles dynamically (When you click on the navigation button set the styles)

We can pass a function to the component

```js
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: "#351401" },
    headerTintColor: "white",
    contentStyle: { backgroundColor: "#3f2f25" },
  }}
>
  <Stack.Screen
    name="Categories"
    component={CategoriesScreen}
    options={{
      title: "All Categories",
    }}
  />
  <Stack.Screen
    name="Overview"
    component={MealsOverviewScreen}
    options={({ route, navigation }) => {
      const catId = route.params.categoryId;
      return {
        title: catId,
      };
    }}
  />
</Stack.Navigator>
```

The alternative is to set the options inside the component

```js
import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ navigation, route }) => {
  // const route = useRoute();
  // route.params.categoryId;

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  // useLayoutEffect instead of useEffect, because we need to execute the effect at the same time the component is transitioning not after like it would be with useEffect
  useLayoutEffect(() => {
    // We can execute code here to select the options
    const categoryTitle = CATEGORIES.find((category) => {
      category.id === catId;
    }).title;
    // And set the navigation options
    navigation.setOptions({
      title: categoryTitle,
    });
  });

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};
```

# Adding Header Buttons

React Navigation allows to add components to the header with the options prop

```js
<Stack.Screen
  name="MealDetail"
  component={MealDetailScreen}
  options={{
    hreaderRight: () => {
      return <Text>In the header</Text>;
    },
  }}
/>
```

This could be a button

```js
<Stack.Screen
  name="MealDetail"
  component={MealDetailScreen}
  options={{
    hreaderRight: () => {
      return <Button onPress={() => {}}>Tap me!</Button>;
    },
  }}
/>
```

This is useful if we dont need to interact with the actual screen component... but if we do, then we can do it inside the components with useLayout and navigation.setOptions

```js
import React, { useLayoutEffect } from "react";

const MealDetailScreen = ({ navigation, route }) => {
  // ...
  function headerButtonPressHandler() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <Button title="Tap me" onPress={headerButtonPressHandler} />;
      },
    });
  }, [navigation, headerButtonPressHandler]);

  //...
};
```

# Nesting Navigators

> yarn add @react-navigation/drawer

> expo install react-native-gesture-handler react-native-reanimated

> yarn add react-native-reanimated@2.2.0
