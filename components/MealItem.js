import React from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../constants/Colors";

const MealItem = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={props.onSelectMeal}>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            style={styles.bgImgage}
            source={{ uri: props.item.imageUrl }}
          >
            <Text style={styles.title} numberOfLines={1}>
              {props.item.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{props.item.duration} min</Text>
          <Text>{props.item.complexity.toUpperCase()}</Text>
          <Text>{props.item.affordability.toUpperCase()} </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: Colors.primaryColor,
    marginBottom: 19,
    borderRadius: 10,
    overflow: "hidden"
  },
  mealRow: {
    flexDirection: "row"
  },
  mealHeader: {
    height: "80%"
  },
  mealDetail: {
    justifyContent: "space-between"
  },
  bgImgage: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end"
  },
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 22,
    color: "white",
    backgroundColor: "rgba(0,0,0,0.3)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center"
  }
});

export default MealItem;
