import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ExerciseDetailScreen } from "../detail/ExerciseDetailScreen";
import { ExerciseListScreen } from "../list/ExerciseListScreen";

export const ExerciseStackScreen: FC = function () {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen
        component={ExerciseListScreen}
        name={ExerciseStackScreenName.ExerciseList}
        options={{ headerTitleStyle: styles.headerTitleStyle, title: "🏋️‍♀️" }}
      />
      <ExerciseStack.Screen
        component={ExerciseDetailScreen}
        name={ExerciseStackScreenName.ExerciseDetail}
        options={{
          headerTitleStyle: styles.headerTitleStyle,
          title: "🏋️‍♀️",
        }}
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
  ExerciseDetail = "ExerciseDetail",
}

export type ExerciseStackParamList = {
  [ExerciseStackScreenName.ExerciseList]: undefined;
  [ExerciseStackScreenName.ExerciseDetail]: { id: number };
};

const ExerciseStack = createStackNavigator<ExerciseStackParamList>();

const styles = StyleSheet.create({ headerTitleStyle: { fontSize: 25 } });
