import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import firebase from "firebase";
import React from "react";

import { ExerciseStackScreen } from "./features/exercise/ExerciseStackScreen";
import { HabitStackScreen } from "./features/habit/HabitStackScreen";

firebase.initializeApp({
  apiKey: "AIzaSyDZ8Q9baAkcG6DhGt_SGlad4zpmBIo9NQ8",
  appId: "1:429857278278:web:9686d21abbc062ac957d47",
  authDomain: "nik-macintosh-783f9.firebaseapp.com",
  databaseURL: "https://nik-macintosh-783f9.firebaseio.com",
  messagingSenderId: "429857278278",
  projectId: "nik-macintosh-783f9",
  storageBucket: "nik-macintosh-783f9.appspot.com",
});

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
