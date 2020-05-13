import { gql } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { FlatListProps, StyleSheet, Text, View } from "react-native";

import { HabitListItemFields } from "./__generated__/HabitListItemFields";

export const HABIT_LIST_ITEM_FIELDS_FRAGMENT = gql`
  fragment HabitListItemFields on Habit {
    id
    name
  }
`;

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
  itemSeparator: { height: 1, width: "100%" },
  itemText: { marginHorizontal: 20 },
});
