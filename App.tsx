import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
});

const ExerciseScreen: FC = function () {
  return (
    <View style={styles.container}>
      <Text>Exercise</Text>
    </View>
  );
};

const ExerciseStack = createStackNavigator();

const ExerciseStackScreen: FC = function () {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen component={ExerciseScreen} name="Exercise" />
    </ExerciseStack.Navigator>
  );
};

const HabitScreen: FC = function () {
  return (
    <View style={styles.container}>
      <Text>Habit</Text>
    </View>
  );
};

const HabitStack = createStackNavigator();

const HabitStackScreen: FC = function () {
  return (
    <HabitStack.Navigator>
      <HabitStack.Screen component={HabitScreen} name="Habit" />
    </HabitStack.Navigator>
  );
};

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
