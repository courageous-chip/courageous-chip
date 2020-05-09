import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigationProp } from "@react-navigation/stack";
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
import { ModalStackParamList, ModalStackScreenName } from "./ModalStackScreen";

type BottomTabScreenNavigationProp = StackNavigationProp<
  ModalStackParamList,
  ModalStackScreenName.BottomTab
>;

type Props = { navigation: BottomTabScreenNavigationProp };

export const BottomTabScreen: FC<Props> = function () {
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
