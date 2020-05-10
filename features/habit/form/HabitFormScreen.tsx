import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { HabitForm } from "./HabitForm";

export const HabitFormScreen: FC = function () {
  const navigation = useNavigation<
    StackNavigationProp<ModalStackParamList, HabitFormModalStackScreenName>
  >();

  navigation.setOptions({
    headerBackImage: () => null,
    headerBackTitleStyle: styles.headerBackTitleStyle,
    headerBackTitle: "👎",
  });

  return <HabitForm />;
};

export enum HabitFormModalStackScreenName {
  HabitForm = "HabitForm",
}

export type HabitFormModalStackParamList = {
  [HabitFormModalStackScreenName.HabitForm]: { id?: string };
};

const styles = StyleSheet.create({
  headerBackTitleStyle: { fontSize: 25, marginLeft: 20 },
});
