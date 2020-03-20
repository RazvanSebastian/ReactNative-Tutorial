import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { MEALS } from "../dummy/dummy-data";
import FavouriteHeaderButton from "../components/HeaderButton";

const MealDetailsScreen = props => {
  const selectedMeal = MEALS.find(
    meal => meal.id === props.navigation.getParam("mealId")
  );

  return (
    <View style={styles.container}>
      <Text> {selectedMeal.title}</Text>
      <Button
        title="Go back to categories"
        onPress={() => props.navigation.navigate("Categories")}
      />
    </View>
  );
};

MealDetailsScreen.navigationOptions = navigationData => {
  const selectedMeal = MEALS.find(
    meal => meal.id === navigationData.navigation.getParam("mealId")
  );
  return {
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={FavouriteHeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-heart"
          onPress={() => console.log("Mark as favourite!")}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default MealDetailsScreen;
