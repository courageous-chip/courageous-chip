import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { BottomTabParamList } from "../ui/BottomTabScreen";
import { ExerciseListScreen } from "./ExerciseListScreen";

type ExerciseStackScreenNavigationProp = BottomTabNavigationProp<
  BottomTabParamList,
  ExerciseStackBottomTabScreenName
>;

type Props = { navigation: ExerciseStackScreenNavigationProp };

export const ExerciseStackScreen: FC<Props> = function () {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen
        component={ExerciseListScreen}
        name={ExerciseStackScreenName.ExerciseList}
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
