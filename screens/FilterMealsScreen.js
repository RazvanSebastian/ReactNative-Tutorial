import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ApplicationHeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

const FilterMealsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FilterMealsScreen</Text>
    </View>
  );
};

FilterMealsScreen.navigationOptions = navigationData => {
  return {
    headerTitle: "Filter meals",
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default FilterMealsScreen;
