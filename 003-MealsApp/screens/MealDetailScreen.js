import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
// To have acces to the context we need to import the useContext hook
import React, { useLayoutEffect, useContext } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
// We need to import our context
// import { FavoritesContext } from "../store/context/favorites-context";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favoriteSlice";

const MealDetailScreen = ({ navigation, route }) => {
  // We need to use the context hook passing the context we defined
  //const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealsCtx = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);

  // We can query our context
  const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

  function changeFavoriteStatusHandler() {
    // console.log("Pressed!");
    if (mealIsFavorite) {
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite(mealId));
    } else {
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite(mealId));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={changeFavoriteStatusHandler}
            icon={mealIsFavorite ? "star" : "staro"}
            color="white"
          />
        );
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView>
      <View style={styles.root}>
        <Image style={styles.image} source={{ uri: mealData.imageUrl }} />
        <Text style={styles.title}>{mealData.title}</Text>
        <MealDetails
          duration={mealData.duration}
          affordability={mealData.affordability}
          complexity={mealData.complexity}
          textStyle={styles.detailText}
        />
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={mealData.ingredients} />
        </View>
        <View style={styles.listContainer}>
          <Subtitle>Steps</Subtitle>
          <List data={mealData.steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
});
