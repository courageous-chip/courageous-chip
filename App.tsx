import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import { configureFirebase } from "./config/configureFirebase";
import { configureSentry } from "./config/configureSentry";
import { client } from "./data/client";
import { ModalStackScreen } from "./features/ui/ModalStackScreen";

configureFirebase();
configureSentry();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <ModalStackScreen />
      </NavigationContainer>
    </ApolloProvider>
  );
}
