import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import {
  AppBottomTabParamList,
  ScreenName as BottomTabScreenName,
} from "../../App";
import { HabitListScreen } from "./HabitListScreen";

type Props = {
  navigation: BottomTabNavigationProp<
    AppBottomTabParamList,
    BottomTabScreenName.ExerciseStack
  >;
};

export const HabitStackScreen: FC<Props> = function () {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen
        component={HabitListScreen}
        name={ScreenName.HabitList}
      />
    </HabitStack.Navigator>
  );
};

export enum ScreenName {
  HabitList = "HabitList",
}

export interface HabitStackParamList extends ParamListBase {
  [ScreenName.HabitList]: undefined;
}

const HabitStack = createStackNavigator<HabitStackParamList>();
