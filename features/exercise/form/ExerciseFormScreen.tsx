import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet } from "react-native";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { ExerciseForm } from "./ExerciseForm";

export const ExerciseFormScreen: FC = function () {
  const navigation = useNavigation<
    StackNavigationProp<ModalStackParamList, ExerciseFormModalStackScreenName>
  >();
  const route = useRoute<
    RouteProp<ModalStackParamList, ExerciseFormModalStackScreenName>
  >();

  navigation.setOptions({
    headerBackImage: () => null,
    headerBackTitleStyle: styles.headerBackTitleStyle,
    headerBackTitle: "👎",
  });

  return <ExerciseForm id={route.params?.id} />;
};

export enum ExerciseFormModalStackScreenName {
  ExerciseForm = "ExerciseForm",
}

export type ExerciseFormModalStackParamList = {
  [ExerciseFormModalStackScreenName.ExerciseForm]?: { id: string };
};

const styles = StyleSheet.create({
  headerBackTitleStyle: { fontSize: 25, marginLeft: 20 },
});
