import { gql, useQuery } from "@apollo/client";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { EmptyView } from "../ui/EmptyView";
import { ErrorView } from "../ui/ErrorView";
import { LoadingView } from "../ui/LoadingView";
import {
  keyExtractor,
  renderItem,
  EXERCISE_LIST_ITEM_FIELDS_FRAGMENT,
} from "./ExerciseListItem";
import { GetExercises } from "./__generated__/GetExercises";

export const ExerciseList: FC = function () {
  const { data, error, loading } = useQuery<GetExercises>(GET_EXERCISES_QUERY);

  return loading ? (
    <LoadingView />
  ) : error ? (
    <ErrorView />
  ) : !data?.exercises.length ? (
    <EmptyView />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data.exercises}
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
    backgroundColor: "#fff",
    flex: 1,
  },
});
