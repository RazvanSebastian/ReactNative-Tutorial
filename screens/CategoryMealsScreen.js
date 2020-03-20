import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { CATEGORIES, MEALS } from "../dummy/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import MealItem from "../components/MealItem";

const renderMealItem = (item, navigation) => {
  return (
    <MealItem
      item={item}
      onSelectMeal={() => {
        navigation.navigate({
          routeName: "MealDetails",
          params: {
            mealId: item.id
          }
        });
      }}
    />
  );
};

const CategoryMealsScreen = props => {
  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(props.navigation.getParam("categoryId"))
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => renderMealItem(item, props.navigation)}
      />
    </View>
  );
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const selectedCategory = CATEGORIES.find(
    category => category.id === navigationData.navigation.getParam("categoryId")
  );
  return { headerTitle: selectedCategory.title };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default CategoryMealsScreen;
