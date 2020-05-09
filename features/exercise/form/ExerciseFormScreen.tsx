import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { ExerciseForm } from "./ExerciseForm";

export const ExerciseFormScreen: FC = function () {
  const navigation = useNavigation<
    StackNavigationProp<ModalStackParamList, ExerciseFormModalStackScreenName>
  >();

  navigation.setOptions({
    headerBackImage: () => null,
    headerBackTitle: "Cancel",
  });

  return <ExerciseForm />;
};

export enum ExerciseFormModalStackScreenName {
  ExerciseForm = "ExerciseForm",
}

export type ExerciseFormModalStackParamList = {
  [ExerciseFormModalStackScreenName.ExerciseForm]: { id?: string };
};
