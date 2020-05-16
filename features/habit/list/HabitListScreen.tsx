import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import { ModalStackParamList } from "../../ui/ModalStackScreen";
import { HabitFormModalStackScreenName } from "../form/HabitFormScreen";
import { HabitList } from "./HabitList";

export const HabitListScreen: FC = function () {
  const navigation = useNavigation<StackNavigationProp<ModalStackParamList>>();

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(HabitFormModalStackScreenName.HabitForm, {
            id: "tzjZZh4M5AuJ3ZTZ4h88",
          })
        }
        style={styles.headerRightContainer}
      >
        <Text style={styles.headerRightText}>🆕</Text>
      </TouchableOpacity>
    ),
  });

  return <HabitList />;
};

const styles = StyleSheet.create({
  headerRightContainer: {
    marginRight: 20,
  },
  headerRightText: {
    fontSize: 25,
  },
});
