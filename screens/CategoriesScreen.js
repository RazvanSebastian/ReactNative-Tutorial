import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

import { CATEGORIES } from "../dummy/dummy-data";
import { FlatList } from "react-native-gesture-handler";
import CategoryGridTitle from "../components/CategoryGridTitle";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import ApplicationHeaderButton from "../components/HeaderButton";

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

CategoriesScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={ApplicationHeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigationData.navigation.toggleDrawer()}
          color="white"
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default CategoriesScreen;
