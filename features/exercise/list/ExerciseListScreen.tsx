import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";

import {
  ExerciseStackParamList,
  ExerciseStackScreenName,
} from "../stack/ExerciseStackScreen";
import { ExerciseList } from "./ExerciseList";

type ExerciseListScreenNavigationProp = StackNavigationProp<
  ExerciseStackParamList,
  ExerciseStackScreenName.ExerciseList
>;

type Props = { navigation: ExerciseListScreenNavigationProp };

export const ExerciseListScreen: FC<Props> = function () {
  return <ExerciseList />;
};
