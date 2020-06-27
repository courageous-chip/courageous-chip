import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

import { ExerciseListItemFields } from "../list/__generated__/ExerciseListItemFields";

interface Props {
  name: ExerciseListItemFields["name"];
  id: ExerciseListItemFields["id"];
}

export const ExerciseDetailScreen: FunctionComponent<Props> = function (props) {
  const { name } = props;

  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export enum ExerciseDetailStackScreenName {
  ExerciseDetail = "ExerciseDetail",
}

export type ExcerciseDetailStackScreenParamList = {
  [ExerciseDetailStackScreenName.ExerciseDetail]: { id: string; name: string };
};
