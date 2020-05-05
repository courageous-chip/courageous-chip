import { ApolloProvider } from "@apollo/client";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { configureFirebase } from "./config/configureFirebase";
import { configureSentry } from "./config/configureSentry";
import { client } from "./data/client";
import { ExerciseStackScreen } from "./features/exercise/ExerciseStackScreen";
import { HabitStackScreen } from "./features/habit/HabitStackScreen";

configureFirebase();
configureSentry();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen component={ExerciseStackScreen} name="Exercise" />
          <Tab.Screen component={HabitStackScreen} name="Habit" />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
