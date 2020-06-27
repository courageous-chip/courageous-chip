import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

import { HabitListItemFields } from "../../habit/list/__generated__/HabitListItemFields";

interface Props {
  name: HabitListItemFields["name"];
  id: HabitListItemFields["id"];
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
