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

export type ExerciseListItemOnPress = (
  id: ExerciseListItemFields["id"],
) => void;

export const renderItem: (
  onPress: ExerciseListItemOnPress,
) => FlatListProps<ExerciseListItemFields>["renderItem"] = function (onPress) {
  return function ({ item: { id, name } }) {
    return <ExerciseListItem id={id} name={name} onPress={() => onPress(id)} />;
  };
};

type Props = Pick<ExerciseListItemFields, "id" | "name"> & {
  onPress: TouchableOpacityProps["onPress"];
};

export const ExerciseListItem: FC<Props> = function ({ name, onPress }) {
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
  itemText: { marginHorizontal: 20 },
});
