import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

export const ErrorView: FC = function () {
  const {
    colors: { background: backgroundColor },
  } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.text}>💩</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 72,
  },
});
