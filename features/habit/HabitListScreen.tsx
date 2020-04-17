import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const HabitListScreen: FC = function () {
  return (
    <View style={styles.container}>
      <Text>List habits</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});
