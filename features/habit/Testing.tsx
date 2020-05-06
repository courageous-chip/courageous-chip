import React, { FunctionComponent, useState } from "react";
import { View, TextInput } from "react-native";

export const TestingComponent: FunctionComponent = function () {
  const [value, onChangeText] = useState("");

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={onChangeText}
        value={value}
        testID="input"
        placeholder="Placeholder"
      />
    </View>
  );
};
