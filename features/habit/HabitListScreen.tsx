import { StackNavigationProp } from "@react-navigation/stack";
import i18n from "i18n-js";
import React, { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

import { Loading } from "../ui/Loading";
import { HabitStackParamList, ScreenName } from "./HabitStackScreen";
import { Habit, useHabits } from "./useHabits";

type Props = {
  navigation: StackNavigationProp<HabitStackParamList, ScreenName.HabitList>;
};

export const HabitListScreen: FC<Props> = function ({ navigation }) {
  navigation.setOptions({ title: i18n.t("habit.list.title") });

  const [habits, loading] = useHabits();

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={habits}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const keyExtractor: FlatListProps<Habit>["keyExtractor"] = function ({ id }) {
  return id;
};

const renderItem: FlatListProps<Habit>["renderItem"] = function ({
  item: { name },
}) {
  return <Text>{name}</Text>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
