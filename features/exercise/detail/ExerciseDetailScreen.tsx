import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

export const ExerciseDetailScreen: FunctionComponent = function () {
  return (
    <View>
      <Text>Exercise Detail Screen</Text>
    </View>
  );
};

export enum ExerciseDetailStackScreenName {
  ExerciseDetail = "ExerciseDetail",
}

export type ExcerciseDetailStackScreenParamList = {
  [ExerciseDetailStackScreenName.ExerciseDetail]: { id: string; name: string };
};
