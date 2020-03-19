import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriesScreen = porps => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
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

export default CategoriesScreen;
