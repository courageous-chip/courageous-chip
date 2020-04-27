import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { HabitDetailScreen } from "./HabitDetailScreen";
import { HabitListScreen } from "./HabitListScreen";

export const HabitStackScreen: FC = () => (
  <HabitStack.Navigator>
    <HabitStack.Screen component={HabitListScreen} name="HabitList" />
    <HabitStack.Screen component={HabitDetailScreen} name="HabitDetail" />
  </HabitStack.Navigator>
);

const HabitStack = createStackNavigator();
