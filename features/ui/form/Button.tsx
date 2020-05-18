import { useTheme } from "@react-navigation/native";
import React, { memo } from "react";
import {
  ActivityIndicator,
  FlexStyle,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

type Props = {
  loading?: boolean;
  marginBottom?: FlexStyle["marginBottom"];
  text: string;
  valid?: boolean;
};

export const Button = memo<Props>(function ({
  loading = false,
  marginBottom,
  text,
  valid = true,
}) {
  const {
    colors: { card: backgroundColor, border: borderColor, text: color },
  } = useTheme();
  const disabled = loading || !valid;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {}}
      style={[
        styles.container,
        { backgroundColor, borderColor, marginBottom },
        disabled && styles.disabled,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={color} />
      ) : (
        <Text style={[styles.text, { color }]}>{valid ? text : "🙅‍♀️"}</Text>
      )}
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
  disabled: { opacity: 0.5 },
  text: {
    fontSize: 14,
    lineHeight: 17,
  },
});
