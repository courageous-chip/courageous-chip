import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { FC } from "react";

import { ExerciseStackScreen } from "../../../features/exercise/ExerciseStackScreen";
import { HabitStackScreen } from "../../../features/habit/HabitStackScreen";

export const BottomTabScreen: FC = () => (
  <BottomTab.Navigator>
    <BottomTab.Screen component={ExerciseStackScreen} name="ExerciseStack" />
    <BottomTab.Screen component={HabitStackScreen} name="HabitStack" />
  </BottomTab.Navigator>
);

const BottomTab = createBottomTabNavigator();
