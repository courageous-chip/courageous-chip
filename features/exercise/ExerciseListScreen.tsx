import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";

import { ExerciseList } from "./ExerciseList";
import {
  ExerciseStackParamList,
  ExerciseStackScreenName,
} from "./ExerciseStackScreen";

type ExerciseListScreenNavigationProp = StackNavigationProp<
  ExerciseStackParamList,
  ExerciseStackScreenName.ExerciseList
>;

type Props = { navigation: ExerciseListScreenNavigationProp };

export const ExerciseListScreen: FC<Props> = function () {
  return <ExerciseList />;
};
