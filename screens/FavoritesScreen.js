import React from "react";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";

const FavoritesScreen = (props) => {
  return (
    <MealList
      listData={MEALS.filter((meal) => meal.id === "m1" || meal.id === "m2")}
      navigation={props.navigation}
    />
  );
};

FavoritesScreen.navigationOptions = {
  headerTitle: "Your Favorites",
};

export default FavoritesScreen;
