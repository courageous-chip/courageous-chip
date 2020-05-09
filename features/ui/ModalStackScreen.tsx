import { createStackNavigator } from "@react-navigation/stack";
import React, { FC } from "react";

import { BottomTabScreen } from "./BottomTabScreen";

export const ModalStackScreen: FC = function () {
  return (
    <ModalStack.Navigator headerMode="none" mode="modal">
      <ModalStack.Screen
        component={BottomTabScreen}
        name={ModalStackScreenName.BottomTab}
      />
    </ModalStack.Navigator>
  );
};

export enum ModalStackScreenName {
  BottomTab = "BottomTab",
}

export type ModalStackParamList = {
  [ModalStackScreenName.BottomTab]: undefined;
};

const ModalStack = createStackNavigator<ModalStackParamList>();
