import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";

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
const MealList = props => {
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={({ item }) => renderMealItem(item, props.navigation)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch"
  }
});

export default MealList;
