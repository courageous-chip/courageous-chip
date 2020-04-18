import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { configureFirebase } from "./config/configureFirebase";
import { ExerciseStackScreen } from "./features/exercise/ExerciseStackScreen";
import { HabitStackScreen } from "./features/habit/HabitStackScreen";

configureFirebase();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen component={ExerciseStackScreen} name="Exercise" />
        <Tab.Screen component={HabitStackScreen} name="Habit" />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
