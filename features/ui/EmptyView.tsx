import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const EmptyView: FC = function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🤷‍♀️</Text>
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
  text: {
    fontSize: 72,
  },
});
