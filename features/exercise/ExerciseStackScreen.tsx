import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { ExerciseListScreen } from "./ExerciseListScreen";

export const ExerciseStackScreen: FC = function () {
  return (
    <ExerciseStack.Navigator>
      <ExerciseStack.Screen
        component={ExerciseListScreen}
        name="ExerciseList"
      />
    </ExerciseStack.Navigator>
  );
};

const ExerciseStack = createStackNavigator();
