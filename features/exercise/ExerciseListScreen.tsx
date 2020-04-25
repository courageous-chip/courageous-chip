import React, { FC } from "react";
import { FlatList, FlatListProps, StyleSheet, Text, View } from "react-native";

import { LoadingIndicator } from "../../shared/ui/components/LoadingIndicator";
import { Exercise, useExercises } from "./useExercises";

export const ExerciseListScreen: FC = () => {
  const { exercises, loading } = useExercises();

  return loading ? (
    <LoadingIndicator />
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

const keyExtractor: FlatListProps<Exercise>["keyExtractor"] = ({ id }) => id;

const renderItem: FlatListProps<Exercise>["renderItem"] = ({
  item: { name },
}) => <Text>{name}</Text>;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
