import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

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
        options={bottomTabScreenOptions}
      />
      <ModalStack.Screen
        component={ExerciseFormScreen}
        name={ExerciseFormModalStackScreenName.ExerciseForm}
        options={{ headerTitleStyle: styles.headerTitleStyle, title: "🏋️‍♀️" }}
      />
      <ModalStack.Screen
        component={HabitFormScreen}
        name={HabitFormModalStackScreenName.HabitForm}
        options={{ headerTitleStyle: styles.headerTitleStyle, title: "🗓" }}
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

const bottomTabScreenOptions: StackNavigationOptions = { headerShown: false };

const styles = StyleSheet.create({
  headerTitleStyle: {
    fontSize: 25,
  },
});
