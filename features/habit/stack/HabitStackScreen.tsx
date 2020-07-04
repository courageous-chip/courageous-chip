import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import {
  HabitDetailStackScreenName,
  HabitDetailScreen,
  HabitDetailStackScreenParamList,
} from "../detail/HabitDetailScreen";
import { HabitListScreen } from "../list/HabitListScreen";

export const HabitStackScreen: FC = function () {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen
        component={HabitListScreen}
        name={HabitStackScreenName.HabitList}
        options={{ headerTitleStyle: styles.headerTitleStyle, title: "🗓" }}
      />
      <HabitStack.Screen
        component={HabitDetailScreen}
        name={HabitDetailStackScreenName.HabitDetail}
        options={{
          headerTitleStyle: styles.headerTitleStyle,
          title: "Details 🗓",
        }}
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
} & HabitDetailStackScreenParamList;

const HabitStack = createStackNavigator<HabitStackParamList>();

const styles = StyleSheet.create({ headerTitleStyle: { fontSize: 25 } });
