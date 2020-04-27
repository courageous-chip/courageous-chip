import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { ParamListBase } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import {
  AppBottomTabParamList,
  ScreenName as BottomTabScreenName,
} from "../../App";
import { ExerciseListScreen } from "./ExerciseListScreen";

type Props = {
  navigation: BottomTabNavigationProp<
    AppBottomTabParamList,
    BottomTabScreenName.ExerciseStack
  >;
};

export const ExerciseStackScreen: FC<Props> = function () {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen
        component={ExerciseListScreen}
        name={ScreenName.ExerciseList}
      />
    </ExerciseStack.Navigator>
  );
};

export enum ScreenName {
  ExerciseList = "ExerciseList",
}

export interface ExerciseStackParamList extends ParamListBase {
  [ScreenName.ExerciseList]: undefined;
}

const ExerciseStack = createStackNavigator<ExerciseStackParamList>();
