import { gql } from "@apollo/client";
import React, { FC } from "react";
import { FlatListProps, StyleSheet, Text, View } from "react-native";

import { ExerciseListItemFields } from "./__generated__/ExerciseListItemFields";

export const EXERCISE_LIST_ITEM_FIELDS_FRAGMENT = gql`
  fragment ExerciseListItemFields on Exercise {
    id
    name
  }
`;

export const ItemSeparatorComponent: FlatListProps<
  ExerciseListItemFields
>["ItemSeparatorComponent"] = function () {
  return <View style={styles.itemSeparator} />;
};

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
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: { justifyContent: "center", minHeight: 64 },
  itemSeparator: { backgroundColor: "#f7f7f7", height: 1, width: "100%" },
  itemText: { marginHorizontal: 20 },
});
