import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilterMealsScreen = props => {
  return (
    <View style={styles.container}>
      <Text>FilterMealsScreen</Text>
    </View>
  );
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
