import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ index, item, setArrayOfText }) => {
  function deleteGoal() {
    setArrayOfText((prev) =>
      prev.filter((goal, i) => {
        return i !== index;
      })
    );
    console.log("Delete Goal");
  }
  return (
    <View style={styles.goalItem} key={index}>
      <Pressable
        style={({ pressed }) => pressed && styles.pressedItem}
        android_ripple={{ color: "black" }}
        onPress={deleteGoal}
      >
        <Text style={styles.goalText}>{item}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#f2f2f2",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  goalText: {
    padding: 20,
  },
  pressedItem: {
    opacity: 0.5,
  },
});
