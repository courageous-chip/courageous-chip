import { gql } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatListProps, StyleSheet, Text, View } from "react-native";

import { ExerciseListItemFields } from "./__generated__/ExerciseListItemFields";

export const EXERCISE_LIST_ITEM_FIELDS_FRAGMENT = gql`
  fragment ExerciseListItemFields on Exercise {
    id
    name
  }
`;

export const keyExtractor: FlatListProps<
  ExerciseListItemFields
>["keyExtractor"] = function ({ id }) {
  return id;
};

export const renderItem: FlatListProps<
  ExerciseListItemFields
>["renderItem"] = function ({ item: { name } }) {
  return <ExerciseListItem name={name} />;
};

type Props = Pick<ExerciseListItemFields, "name">;

export const ExerciseListItem: FC<Props> = function ({ name }) {
  const {
    colors: { card: backgroundColor, text: color },
  } = useTheme();

  return (
    <View style={[styles.itemContainer, { backgroundColor }]}>
      <Text style={[styles.itemText, { color }]}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: { justifyContent: "center", minHeight: 64 },
  itemText: { marginHorizontal: 20 },
});
