import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { ExerciseFormScreen } from "./ExerciseFormScreen";

export const ExerciseFormStackScreen: FC = () => (
  <ExerciseFormStack.Navigator>
    <ExerciseFormStack.Screen
      component={ExerciseFormScreen}
      name="ExerciseForm"
    />
  </ExerciseFormStack.Navigator>
);

const ExerciseFormStack = createStackNavigator();
