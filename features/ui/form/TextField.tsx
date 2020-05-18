import { useTheme } from "@react-navigation/native";
import React, { memo } from "react";
import {
  FlexStyle,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = {
  marginBottom?: FlexStyle["marginBottom"];
  placeholder?: TextInputProps["placeholder"];
};

export const TextField = memo<Props>(function ({ marginBottom, placeholder }) {
  const {
    colors: { border: borderColor, card: backgroundColor, text: color },
  } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor, borderColor, marginBottom }]}
    >
      <TextInput
        clearButtonMode="while-editing"
        placeholder={placeholder}
        style={[styles.input, { color }]}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 64,
    paddingHorizontal: 10,
  },
  input: {
    fontSize: 14,
    lineHeight: 17,
  },
});
