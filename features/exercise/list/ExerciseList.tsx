import { gql, useQuery } from "@apollo/client";
import { useTheme, useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { EmptyView } from "../../ui/EmptyView";
import { ErrorView } from "../../ui/ErrorView";
import { LoadingView } from "../../ui/LoadingView";
import { ThemedItemSeparator } from "../../ui/ThemedItemSeparator";
import { ExerciseDetailStackScreenName } from "../detail/ExerciseDetailScreen";
import {
  ExerciseListItemOnPress,
  EXERCISE_LIST_ITEM_FIELDS_FRAGMENT,
  keyExtractor,
  ExerciseListItem,
} from "./ExerciseListItem";
import { ListExercisesQuery } from "./__generated__/ListExercisesQuery";

type Props = { onPress: ExerciseListItemOnPress };

export const ExerciseList: FC<Props> = function ({ onPress }) {
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const { data, error, loading } = useQuery<ListExercisesQuery>(
    LIST_EXERCISES_QUERY,
  );

  const navigation = useNavigation();

  return loading ? (
    <LoadingView />
  ) : error ? (
    <ErrorView />
  ) : !data?.exercises.length ? (
    <EmptyView />
  ) : (
    <View style={[styles.container, { backgroundColor }]}>
      <FlatList
        data={data.exercises}
        ItemSeparatorComponent={ThemedItemSeparator}
        keyExtractor={keyExtractor}
        renderItem={({ item }) => (
          <ExerciseListItem
            name={item.name}
            id={item.id}
            onPress={() =>
              navigation.navigate(
                ExerciseDetailStackScreenName.ExerciseDetail,
                { id: item.id, name: item.name },
              )
            }
          />
        )}
      />
    </View>
  );
};

export const LIST_EXERCISES_QUERY = gql`
  query ListExercisesQuery {
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
