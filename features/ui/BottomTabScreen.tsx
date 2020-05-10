import {
  createBottomTabNavigator,
  BottomTabBarOptions,
} from "@react-navigation/bottom-tabs";
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
    <Tab.Navigator tabBarOptions={tabBarOptions}>
      <Tab.Screen
        component={ExerciseStackScreen}
        name={ExerciseStackBottomTabScreenName.ExerciseStack}
        options={{ title: "🏋️‍♀️" }}
      />
      <Tab.Screen
        component={HabitStackScreen}
        name={HabitStackBottomTabScreenName.HabitStack}
        options={{ title: "🗓" }}
      />
    </Tab.Navigator>
  );
};

export type BottomTabParamList = ExerciseStackBottomTabParamList &
  HabitStackBottomTabParamList;

const Tab = createBottomTabNavigator<BottomTabParamList>();

const tabBarOptions: BottomTabBarOptions = {
  labelStyle: { fontSize: 28 },
  showLabel: true,
};
