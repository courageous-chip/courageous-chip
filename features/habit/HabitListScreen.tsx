import React, { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

import { Loading } from "../ui/Loading";
import { Habit, useHabits } from "./useHabits";

export const HabitListScreen: FC = function () {
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
