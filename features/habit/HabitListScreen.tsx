import { useQuery, gql } from "@apollo/client";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import {
  keyExtractor,
  renderItem,
  HABIT_LIST_ITEM_FIELDS_FRAGMENT,
} from "../habit/HabitListItem";
import { EmptyView } from "../ui/EmptyView";
import { ErrorView } from "../ui/ErrorView";
import { LoadingView } from "../ui/LoadingView";
import { GetHabits } from "./__generated__/GetHabits";

export const HabitListScreen: FC = function () {
  const { data, error, loading } = useQuery<GetHabits>(GET_HABITS_QUERY);

  return loading ? (
    <LoadingView />
  ) : error ? (
    <ErrorView />
  ) : !data?.habits.length ? (
    <EmptyView />
  ) : (
    <View style={styles.container}>
      <FlatList
        data={data.habits}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

const GET_HABITS_QUERY = gql`
  query GetHabits {
    habits {
      ...HabitListItemFields
    }
  }

  ${HABIT_LIST_ITEM_FIELDS_FRAGMENT}
`;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
