import { gql } from "@apollo/client";
import React, { FC } from "react";
import { Text, VirtualizedListProps } from "react-native";

import { HabitListItemFields } from "./__generated__/HabitListItemFields";

export const HABIT_LIST_ITEM_FIELDS_FRAGMENT = gql`
  fragment HabitListItemFields on Habit {
    id
    name
  }
`;

export const keyExtractor: VirtualizedListProps<
  HabitListItemFields
>["keyExtractor"] = function ({ id }) {
  return id;
};

export const renderItem: VirtualizedListProps<
  HabitListItemFields
>["renderItem"] = function ({ item: { name } }) {
  return <HabitListItem name={name} />;
};

type Props = Pick<HabitListItemFields, "name">;

export const HabitListItem: FC<Props> = function ({ name }) {
  return <Text testID="habitItemTestID">{name}</Text>;
};
