import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

const CategoryGridTitle = props => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridContainer, backgroundColor: props.item.color }}
      onPress={() => {
        props.navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: props.item.id
          }
        });
      }}
    >
      <View style={styles.gridContent}>
        <Text style={styles.title}>{props.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 5 }
  },
  gridContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center"
  },
  title: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 25,
    textAlign: "center"
  }
});

export default CategoryGridTitle;
