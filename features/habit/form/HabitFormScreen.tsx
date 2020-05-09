import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { HabitForm } from "./HabitForm";

export const HabitFormScreen: FC = function () {
  const navigation = useNavigation<
    StackNavigationProp<ModalStackParamList, HabitFormModalStackScreenName>
  >();

  navigation.setOptions({
    headerBackImage: () => null,
    headerBackTitle: "Cancel",
  });

  return <HabitForm />;
};

export enum HabitFormModalStackScreenName {
  HabitForm = "HabitForm",
}

export type HabitFormModalStackParamList = {
  [HabitFormModalStackScreenName.HabitForm]: { id?: string };
};
