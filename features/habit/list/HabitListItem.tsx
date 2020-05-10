import { gql } from "@apollo/client";
import React, { FC } from "react";
import { FlatListProps, StyleSheet, Text, View } from "react-native";

import { HabitListItemFields } from "./__generated__/HabitListItemFields";

export const HABIT_LIST_ITEM_FIELDS_FRAGMENT = gql`
  fragment HabitListItemFields on Habit {
    id
    name
  }
`;

export const ItemSeparatorComponent: FlatListProps<
  HabitListItemFields
>["ItemSeparatorComponent"] = function () {
  return <View style={styles.itemSeparator} />;
};

export const keyExtractor: FlatListProps<
  HabitListItemFields
>["keyExtractor"] = function ({ id }) {
  return id;
};

export const renderItem: FlatListProps<
  HabitListItemFields
>["renderItem"] = function ({ item: { name } }) {
  return <HabitListItem name={name} />;
};

type Props = Pick<HabitListItemFields, "name">;

export const HabitListItem: FC<Props> = function ({ name }) {
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
