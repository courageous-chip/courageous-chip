import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ExerciseListScreen } from "../list/ExerciseListScreen";

export const ExerciseStackScreen: FC = function () {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen
        component={ExerciseListScreen}
        name={ExerciseStackScreenName.ExerciseList}
        options={{ headerTitleStyle: styles.headerTitleStyle, title: "🏋️‍♀️" }}
      />
    </ExerciseStack.Navigator>
  );
};

export enum ExerciseStackBottomTabScreenName {
  ExerciseStack = "ExerciseStack",
}

export type ExerciseStackBottomTabParamList = {
  [ExerciseStackBottomTabScreenName.ExerciseStack]: undefined;
};

export enum ExerciseStackScreenName {
  ExerciseList = "ExerciseList",
}

export type ExerciseStackParamList = {
  [ExerciseStackScreenName.ExerciseList]: undefined;
};

const ExerciseStack = createStackNavigator<ExerciseStackParamList>();

const styles = StyleSheet.create({ headerTitleStyle: { fontSize: 25 } });
