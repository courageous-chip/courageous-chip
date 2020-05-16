import { gql, useQuery } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { EmptyView } from "../../ui/EmptyView";
import { ErrorView } from "../../ui/ErrorView";
import { LoadingView } from "../../ui/LoadingView";
import { ThemedItemSeparator } from "../../ui/ThemedItemSeparator";
import {
  HabitListItemOnPress,
  HABIT_LIST_ITEM_FIELDS_FRAGMENT,
  keyExtractor,
  renderItem,
} from "./HabitListItem";
import { ListHabitsQuery } from "./__generated__/ListHabitsQuery";

type Props = { onPress: HabitListItemOnPress };

export const HabitList: FC<Props> = function ({ onPress }) {
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const { data, error, loading } = useQuery<ListHabitsQuery>(LIST_HABITS_QUERY);

  return loading ? (
    <LoadingView />
  ) : error ? (
    <ErrorView />
  ) : !data?.habits.length ? (
    <EmptyView />
  ) : (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={data.habits}
        ItemSeparatorComponent={ThemedItemSeparator}
        keyExtractor={keyExtractor}
        renderItem={renderItem(onPress)}
      />
    </View>
  );
};

export const LIST_HABITS_QUERY = gql`
  query ListHabitsQuery {
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
