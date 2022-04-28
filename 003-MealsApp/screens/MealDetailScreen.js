import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ navigation, route }) => {
  const mealId = route.params.mealId;
  const mealData = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed!");
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);
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
