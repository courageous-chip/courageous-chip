import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { ExerciseFormModalStackScreenName } from "../form/ExerciseFormScreen";
import { ExerciseList } from "./ExerciseList";

export const ExerciseListScreen: FC = function () {
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(ExerciseFormModalStackScreenName.ExerciseForm)
        }
        style={styles.headerRightContainer}
      >
        <Text style={styles.headerRightText}>🆕</Text>
      </TouchableOpacity>
    ),
  });

  return <ExerciseList />;
};

const styles = StyleSheet.create({
  headerRightContainer: {
    marginRight: 20,
  },
  headerRightText: {
    fontSize: 25,
  },
});
