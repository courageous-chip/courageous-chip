import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { enableScreens } from "react-native-screens";

import { configureFirebase } from "./config/configureFirebase";
import { ModalStackScreen } from "./shared/ui/screens/ModalStackScreen";

configureFirebase();
enableScreens();

export default () => (
  <NavigationContainer>
    <ModalStackScreen />
  </NavigationContainer>
);
