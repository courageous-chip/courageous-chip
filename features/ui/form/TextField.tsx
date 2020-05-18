import { useTheme } from "@react-navigation/native";
import React, { memo } from "react";
import {
  FlexStyle,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

type Props = Pick<FlexStyle, "marginBottom"> &
  Pick<TextInputProps, "autoFocus" | "onChangeText" | "placeholder" | "value">;

export const TextField = memo<Props>(function ({
  autoFocus,
  marginBottom,
  onChangeText,
  placeholder,
  value,
}) {
  const {
    colors: { border: borderColor, card: backgroundColor, text: color },
  } = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor, borderColor, marginBottom }]}
    >
      <TextInput
        autoFocus={autoFocus}
        clearButtonMode="while-editing"
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={[styles.input, { color }]}
        value={value}
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
