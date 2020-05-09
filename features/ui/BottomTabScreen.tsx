import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";

import {
  ExerciseStackBottomTabParamList,
  ExerciseStackBottomTabScreenName,
  ExerciseStackScreen,
} from "../exercise/stack/ExerciseStackScreen";
import {
  HabitStackBottomTabParamList,
  HabitStackBottomTabScreenName,
  HabitStackScreen,
} from "../habit/stack/HabitStackScreen";

export const BottomTabScreen: FC = function () {
  return (
    <Tab.Navigator>
      <Tab.Screen
        component={ExerciseStackScreen}
        name={ExerciseStackBottomTabScreenName.ExerciseStack}
      />
      <Tab.Screen
        component={HabitStackScreen}
        name={HabitStackBottomTabScreenName.HabitStack}
      />
    </Tab.Navigator>
  );
};

export type BottomTabParamList = ExerciseStackBottomTabParamList &
  HabitStackBottomTabParamList;

const Tab = createBottomTabNavigator<BottomTabParamList>();
