import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { Button } from "react-native";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { ExerciseFormModalStackScreenName } from "../form/ExerciseFormScreen";
import { ExerciseList } from "./ExerciseList";

export const ExerciseListScreen: FC = function () {
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();

  navigation.setOptions({
    headerRight: () => (
      <Button
        onPress={() =>
          navigation.navigate(ExerciseFormModalStackScreenName.ExerciseForm)
        }
        title="🆕"
      />
    ),
  });

  return <ExerciseList />;
};
