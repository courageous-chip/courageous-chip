import React, { FC } from "react";
import { Text, View } from "react-native";

import { ExerciseListItemFields } from "../list/__generated__/ExerciseListItemFields";

type Props = {
  id: ExerciseListItemFields["id"];
  name: ExerciseListItemFields["name"];
};

export const ExerciseDetailScreen: FC<Props> = function (props) {
  const { name } = props;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};
