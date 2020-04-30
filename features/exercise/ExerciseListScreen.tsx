import React, { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

import { Loading } from "../ui/Loading";
import { Exercise, useExercises } from "./useExercises";

export const ExerciseListScreen: FC = function () {
  const [exercises, loading] = useExercises();

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const keyExtractor: FlatListProps<Exercise>["keyExtractor"] = function ({
  id,
}) {
  return id;
};

const renderItem: FlatListProps<Exercise>["renderItem"] = function ({
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
