import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ParamListBase } from "@react-navigation/native";
import i18n from "i18n-js";
import React from "react";

import { configureFirebase } from "./config/configureFirebase";
import { configureI18n } from "./config/configureI18n";
import { ExerciseStackScreen } from "./features/exercise/ExerciseStackScreen";
import { HabitStackScreen } from "./features/habit/HabitStackScreen";

configureFirebase();
configureI18n();

export enum ScreenName {
  ExerciseStack = "ExerciseStack",
  HabitStack = "HabitStack",
}

export interface AppBottomTabParamList extends ParamListBase {
  [ScreenName.ExerciseStack]: undefined;
  [ScreenName.HabitStack]: undefined;
}

const Tab = createBottomTabNavigator<AppBottomTabParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          component={ExerciseStackScreen}
          name={ScreenName.ExerciseStack}
          options={{ title: i18n.t("exercise.tab.title") }}
        />
        <Tab.Screen
          component={HabitStackScreen}
          name={ScreenName.HabitStack}
          options={{ title: i18n.t("habit.tab.title") }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
