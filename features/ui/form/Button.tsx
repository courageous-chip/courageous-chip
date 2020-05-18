import { useTheme } from "@react-navigation/native";
import React, { memo } from "react";
import { FlexStyle, StyleSheet, Text, TouchableOpacity } from "react-native";

type Props = { marginBottom?: FlexStyle["marginBottom"]; text: string };

export const Button = memo<Props>(function ({ marginBottom, text }) {
  const {
    colors: { card: backgroundColor, border: borderColor, text: color },
  } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => {}}
      style={[styles.container, { backgroundColor, borderColor, marginBottom }]}
    >
      <Text style={[styles.text, { color }]}>{text}</Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 64,
  },
  text: {
    fontSize: 14,
    lineHeight: 17,
  },
});
