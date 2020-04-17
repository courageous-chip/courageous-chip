import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const ExerciseListScreen: FC = function () {
  return (
    <View style={styles.container}>
      <Text>List exercises</Text>
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
