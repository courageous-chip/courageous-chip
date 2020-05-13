import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { EmptyView } from "../../ui/EmptyView";
import { ErrorView } from "../../ui/ErrorView";
import { LoadingView } from "../../ui/LoadingView";
import { ThemedItemSeparator } from "../../ui/ThemedItemSeparator";
import {
  EXERCISE_LIST_ITEM_FIELDS_FRAGMENT,
  keyExtractor,
  renderItem,
} from "./ExerciseListItem";
import { GetExercises } from "./__generated__/GetExercises";

export const ExerciseList: FC = function () {
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const { data, error, loading } = useQuery<GetExercises>(GET_EXERCISES_QUERY);

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
  }

  if (!data?.exercises.length) {
    return <EmptyView />;
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={data.exercises}
        ItemSeparatorComponent={ThemedItemSeparator}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export const GET_EXERCISES_QUERY = gql`
  query GetExercises {
    exercises {
      ...ExerciseListItemFields
    }
  }

  ${EXERCISE_LIST_ITEM_FIELDS_FRAGMENT}
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
