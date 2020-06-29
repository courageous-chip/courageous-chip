import { useRoute } from "@react-navigation/native";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

// interface Props {
//   name: ExerciseListItemFields["name"];
//   id: ExerciseListItemFields["id"];
// }

export const ExerciseDetailScreen: FunctionComponent = function () {
  const route = useRoute();
  const { params } = route;

  return (
    <View>
      <Text>{params.id}</Text>
      <Text>{params.name}</Text>
    </View>
  );
};

export enum ExerciseDetailStackScreenName {
  ExerciseDetail = "ExerciseDetail",
}

export type ExcerciseDetailStackScreenParamList = {
  [ExerciseDetailStackScreenName.ExerciseDetail]: { id: string; name: string };
};
