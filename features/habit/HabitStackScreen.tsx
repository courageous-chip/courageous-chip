import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { HabitListScreen } from "./HabitListScreen";

export const HabitStackScreen: FC = function () {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen component={HabitListScreen} name="HabitList" />
    </HabitStack.Navigator>
  );
};

const HabitStack = createStackNavigator();
