import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, View } from "react-native";

export const ThemedItemSeparator: FC = function () {
  const {
    colors: { border: backgroundColor },
  } = useTheme();

  return <View style={[styles.separator, { backgroundColor }]} />;
};

const styles = StyleSheet.create({
  separator: {
    height: 1,
    width: "100%",
  },
});
