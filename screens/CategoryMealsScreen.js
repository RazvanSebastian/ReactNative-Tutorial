import React from "react";
import { CATEGORIES, MEALS } from "../dummy/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const displayedMeals = MEALS.filter(meal =>
    meal.categoryIds.includes(props.navigation.getParam("categoryId"))
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navigationData => {
  const selectedCategory = CATEGORIES.find(
    category => category.id === navigationData.navigation.getParam("categoryId")
  );
  return { headerTitle: selectedCategory.title };
};

export default CategoryMealsScreen;
