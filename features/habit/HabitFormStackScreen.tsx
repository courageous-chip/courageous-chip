import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { HabitFormScreen } from "./HabitFormScreen";

export const HabitFormStackScreen: FC = () => (
  <HabitFormStack.Navigator>
    <HabitFormStack.Screen component={HabitFormScreen} name="HabitForm" />
  </HabitFormStack.Navigator>
);

const HabitFormStack = createStackNavigator();
