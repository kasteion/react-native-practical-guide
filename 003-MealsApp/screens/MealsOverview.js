import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useLayoutEffect } from "react";

// We can also use athe useRoute hook
import { useRoute } from "@react-navigation/native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import MealsList from "../components/MealList/MealsList";

// We get the navigation prop because this component is registered as a screen
// You also get a route prop

const MealsOverviewScreen = ({ navigation, route }) => {
  // const route = useRoute();
  // route.params.categoryId;

  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) =>
    meal.categoryIds.includes(catId)
  );

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  return <MealsList displayedMeals={displayedMeals} />;
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
