import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../dummy/dummy-data";
import ApplicationHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FavouritesScreen = props => {
  const favMeals = MEALS.filter(meal => ["m2", "m1"].includes(meal.id));
  console.log(favMeals);
  return <MealList listData={favMeals} navigation={props.navigation} />;
};

FavouritesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Your favourite meals",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ApplicationHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    )
  };
};

export default FavouritesScreen;
