import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { ExerciseFormStackScreen } from "../../../features/exercise/ExerciseFormStackScreen";
import { HabitFormStackScreen } from "../../../features/habit/HabitFormStackScreen";
import { BottomTabScreen } from "./BottomTabScreen";

export const ModalStackScreen: FC = () => (
  <ModalStack.Navigator headerMode="none" mode="modal">
    <ModalStack.Screen component={BottomTabScreen} name="BottomTab" />
    <ModalStack.Screen
      component={ExerciseFormStackScreen}
      name="ExerciseFormStack"
    />
    <ModalStack.Screen component={HabitFormStackScreen} name="HabitFormStack" />
  </ModalStack.Navigator>
);

const ModalStack = createStackNavigator();
