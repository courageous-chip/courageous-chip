import { gql } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import {
  FlatListProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

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

export type HabitListItemOnPress = (id: HabitListItemFields["id"]) => void;

export const renderItem: (
  onPress: HabitListItemOnPress,
) => FlatListProps<HabitListItemFields>["renderItem"] = function (onPress) {
  return function ({ item: { id, name } }) {
    return <HabitListItem id={id} name={name} onPress={() => onPress(id)} />;
  };
};

type Props = Pick<HabitListItemFields, "id" | "name"> & {
  onPress: TouchableOpacityProps["onPress"];
};

export const HabitListItem: FC<Props> = function ({ name, onPress }) {
  const {
    colors: { card: backgroundColor, text: color },
  } = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemContainer, { backgroundColor }]}
    >
      <Text style={[styles.itemText, { color }]}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: { justifyContent: "center", minHeight: 64 },
  itemSeparator: { height: 1, width: "100%" },
  itemText: { marginHorizontal: 20 },
});
