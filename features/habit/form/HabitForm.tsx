import { gql, useLazyQuery } from "@apollo/client";
import React, { FC, useEffect } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { ListHabitsQuery } from "../list/__generated__/ListHabitsQuery";
import {
  ShowHabitQuery,
  ShowHabitQueryVariables,
} from "./__generated__/ShowHabitQuery";

type Props = { id?: ListHabitsQuery["habits"][0]["id"] };

export const HabitForm: FC<Props> = function ({ id }) {
  const { data, error, loading } = useHabitMaybe(id);

  return <EmptyView />;
};

const useHabitMaybe = (id: Props["id"]) => {
  const [showHabit, result] = useLazyQuery<
    ShowHabitQuery,
    ShowHabitQueryVariables
  >(SHOW_HABIT_QUERY);

  useEffect(() => {
    if (!id) {
      return;
    }

    showHabit({ variables: { id } });
  }, [id, showHabit]);

  return result;
};

const CREATE_HABIT_MUTATION = gql`
  mutation CreateHabitMutation($habit: CreateHabitInput!) {
    createHabit(habit: $habit) {
      id
      name
    }
  }
`;

const DELETE_HABIT_MUTATION = gql`
  mutation DeleteHabitMutation($habit: DeleteHabitInput!) {
    deleteHabit(habit: $habit) {
      id
    }
  }
`;

const UPDATE_HABIT_MUTATION = gql`
  mutation UpdateHabitMutation($habit: UpdateHabitInput!) {
    updateHabit(habit: $habit) {
      id
      name
    }
  }
`;

const SHOW_HABIT_QUERY = gql`
  query ShowHabitQuery($id: ID!) {
    habit(id: $id) {
      id
      name
    }
  }
`;
