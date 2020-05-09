import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { Button } from "react-native";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { HabitFormModalStackScreenName } from "../form/HabitFormScreen";
import { HabitList } from "./HabitList";

export const HabitListScreen: FC = function () {
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();

  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() =>
          navigation.navigate(HabitFormModalStackScreenName.HabitForm)
        }
        title="🆕"
      />
    ),
  });

  return <HabitList />;
};
