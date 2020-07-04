import { useRoute, RouteProp } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

export const ExerciseDetailScreen: FunctionComponent = function () {
  const route = useRoute<
    RouteProp<
      ExcerciseDetailStackScreenParamList,
      ExerciseDetailStackScreenName
    >
  >();
  const { params } = route;

  return (
    <View>
      <Text>{params?.id}</Text>
      <Text>{params?.name}</Text>
    </View>
  );
};

export enum ExerciseDetailStackScreenName {
  ExerciseDetail = "ExerciseDetail",
}

export type ExcerciseDetailStackScreenParamList = {
  [ExerciseDetailStackScreenName.ExerciseDetail]: { id: string; name: string };
};
