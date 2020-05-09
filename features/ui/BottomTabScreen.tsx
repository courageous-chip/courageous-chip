import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { ExerciseStackScreen } from "../exercise/ExerciseStackScreen";
import { HabitStackScreen } from "../habit/HabitStackScreen";

const Tab = createBottomTabNavigator();

export const BottomTabScreen = function () {
  return (
    <Tab.Navigator>
      <Tab.Screen component={ExerciseStackScreen} name="Exercise" />
      <Tab.Screen component={HabitStackScreen} name="Habit" />
    </Tab.Navigator>
  );
};
