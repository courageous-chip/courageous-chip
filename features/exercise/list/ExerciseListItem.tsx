import { gql } from "@apollo/client";
import React, { FC } from "react";
import { Text, VirtualizedListProps } from "react-native";

import { ExerciseListItemFields } from "./__generated__/ExerciseListItemFields";

export const EXERCISE_LIST_ITEM_FIELDS_FRAGMENT = gql`
  fragment ExerciseListItemFields on Exercise {
    id
    name
  }
`;

export const keyExtractor: VirtualizedListProps<
  ExerciseListItemFields
>["keyExtractor"] = function ({ id }) {
  return id;
};

export const renderItem: VirtualizedListProps<
  ExerciseListItemFields
>["renderItem"] = function ({ item: { name } }) {
  return <ExerciseListItem name={name} />;
};

type Props = Pick<ExerciseListItemFields, "name">;

export const ExerciseListItem: FC<Props> = function ({ name }) {
  return <Text>{name}</Text>;
};
