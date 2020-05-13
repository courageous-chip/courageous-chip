import { ApolloProvider } from "@apollo/client";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import { AppearanceProvider, useColorScheme } from "react-native-appearance";

import { configureFirebase } from "./config/configureFirebase";
import { configureSentry } from "./config/configureSentry";
import { client } from "./data/client";
import { ModalStackScreen } from "./features/ui/ModalStackScreen";

configureFirebase();
configureSentry();

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? DarkTheme : DefaultTheme;

  return (
    <AppearanceProvider>
      <ApolloProvider client={client}>
        <NavigationContainer theme={theme}>
          <ModalStackScreen />
        </NavigationContainer>
      </ApolloProvider>
    </AppearanceProvider>
  );
}
