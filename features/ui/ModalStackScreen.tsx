import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import {
  ExerciseFormModalStackParamList,
  ExerciseFormModalStackScreenName,
  ExerciseFormScreen,
} from "../exercise/form/ExerciseFormScreen";
import {
  HabitFormModalStackParamList,
  HabitFormModalStackScreenName,
  HabitFormScreen,
} from "../habit/form/HabitFormScreen";
import { BottomTabScreen } from "./BottomTabScreen";

export const ModalStackScreen: FC = function () {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        component={BottomTabScreen}
        name={ModalStackScreenName.BottomTab}
        options={{ headerShown: false }}
      />
      <ModalStack.Screen
        component={ExerciseFormScreen}
        name={ExerciseFormModalStackScreenName.ExerciseForm}
      />
      <ModalStack.Screen
        component={HabitFormScreen}
        name={HabitFormModalStackScreenName.HabitForm}
      />
    </ModalStack.Navigator>
  );
};

export enum ModalStackScreenName {
  BottomTab = "BottomTab",
}

export type ModalStackParamList = {
  [ModalStackScreenName.BottomTab]: undefined;
} & ExerciseFormModalStackParamList &
  HabitFormModalStackParamList;

const ModalStack = createStackNavigator<ModalStackParamList>();
