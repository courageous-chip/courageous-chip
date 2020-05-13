import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { EmptyView } from "../../ui/EmptyView";
import { ErrorView } from "../../ui/ErrorView";
import { LoadingView } from "../../ui/LoadingView";
import { ThemedItemSeparator } from "../../ui/ThemedItemSeparator";
import {
  HABIT_LIST_ITEM_FIELDS_FRAGMENT,
  keyExtractor,
  renderItem,
} from "./HabitListItem";
import { GetHabits } from "./__generated__/GetHabits";

export const HabitList: FC = function () {
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const { data, error, loading } = useQuery<GetHabits>(GET_HABITS_QUERY);

  if (loading) {
    return <LoadingView />;
  }

  if (error) {
    return <ErrorView />;
  }

  if (!data?.habits.length) {
    return <EmptyView />;
  }

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={data.habits}
        ItemSeparatorComponent={ThemedItemSeparator}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};

export const GET_HABITS_QUERY = gql`
  query GetHabits {
    habits {
      ...HabitListItemFields
    }
  }

  ${HABIT_LIST_ITEM_FIELDS_FRAGMENT}
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
