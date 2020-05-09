import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { BottomTabParamList } from "../../ui/BottomTabScreen";
import { HabitListScreen } from "../list/HabitListScreen";

type HabitStackScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  HabitStackBottomTabScreenName
>;

type Props = { navigation: HabitStackScreenNavigationProp };

export const HabitStackScreen: FC<Props> = function () {
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
