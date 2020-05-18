import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

export const HabitDetailScreen: FunctionComponent = function () {
  return (
    <View>
      <Text>Habit Detail Screen</Text>
    </View>
  );
};

export enum HabitDetailStackScreenName {
  HabitDetail = "HabitDetail",
}

export type HabitDetailStackScreenParamList = {
  [HabitDetailStackScreenName.HabitDetail]: { id: string; name: string };
};
