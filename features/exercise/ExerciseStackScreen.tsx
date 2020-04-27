import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { ExerciseDetailScreen } from "./ExerciseDetailScreen";
import { ExerciseListScreen } from "./ExerciseListScreen";

export const ExerciseStackScreen: FC = () => (
  <ExerciseStack.Navigator>
    <ExerciseStack.Screen component={ExerciseListScreen} name="ExerciseList" />
    <ExerciseStack.Screen
      component={ExerciseDetailScreen}
      name="ExerciseDetail"
    />
  </ExerciseStack.Navigator>
);

const ExerciseStack = createStackNavigator();
