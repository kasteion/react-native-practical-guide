import { StyleSheet, View, FlatList, Text } from "react-native";
import React, { useContext } from "react";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealList/MealItem";
import { useSelector } from "react-redux";

const FavoritesScreen = () => {
  // This is from context
  // const favoriteMealsCtx = useContext(FavoritesContext);
  // const favoriteMeals = MEALS.filter((meal) =>
  //   favoriteMealsCtx.ids.includes(meal.id)
  // );

  const favoriteMealsCtx = useSelector((state) => state.favorites);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsCtx.ids.includes(meal.id)
  );

  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet.</Text>
      </View>
    );
  }

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
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
        data={favoriteMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
