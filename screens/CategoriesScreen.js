import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { CATEGORIES } from "../dummy/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTitle from "../components/CategoryGridTitle";

const renderGridItem = (item, navigation) => {
  return <CategoryGridTitle item={item} navigation={navigation} />;
};

const CategoriesScreen = props => {
  return (
    <FlatList
      data={CATEGORIES}
      renderItem={({ item }) => renderGridItem(item, props.navigation)}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: "Meal Categories"
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
