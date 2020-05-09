import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { HabitListScreen } from "../list/HabitListScreen";

export const HabitStackScreen: FC = function () {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen
        component={HabitListScreen}
        name={HabitStackScreenName.HabitList}
      />
    </HabitStack.Navigator>
  );
};

export enum HabitStackBottomTabScreenName {
  HabitStack = "HabitStack",
}

export type HabitStackBottomTabParamList = {
  [HabitStackBottomTabScreenName.HabitStack]: undefined;
};

export enum HabitStackScreenName {
  HabitList = "HabitList",
}

export type HabitStackParamList = {
  [HabitStackScreenName.HabitList]: undefined;
};

const HabitStack = createStackNavigator<HabitStackParamList>();
