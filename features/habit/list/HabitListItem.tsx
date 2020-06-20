import { gql } from "@apollo/client";
import { useTheme, useNavigation } from "@react-navigation/native";
import React, { FC } from "react";
import {
  FlatListProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { HabitListItemFields } from "./__generated__/HabitListItemFields";
import { HabitDetailStackScreenName } from "../detail/HabitDetailScreen";

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

export const HabitListItem: FC<Props> = function ({ name, id }) {
  const {
    colors: { card: backgroundColor, text: color },
  } = useTheme();

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(HabitDetailStackScreenName.HabitDetail, {
          id,
        })
      }
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
