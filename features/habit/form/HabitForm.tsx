import { gql, useLazyQuery } from "@apollo/client";
import React, { FC, useEffect } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { GetListHabitsQuery } from "../list/__generated__/GetListHabitsQuery";
import {
  GetFormHabitQuery,
  GetFormHabitQueryVariables,
} from "./__generated__/GetFormHabitQuery";

type Props = { id?: GetListHabitsQuery["habits"][0]["id"] };

export const HabitForm: FC<Props> = function ({ id }) {
  const { data, error, loading } = useFormHabitMaybe(id);

  return <EmptyView />;
};

const useFormHabitMaybe = (id: Props["id"]) => {
  const [getFormHabit, result] = useLazyQuery<
    GetFormHabitQuery,
    GetFormHabitQueryVariables
  >(GET_FORM_HABIT_QUERY);

  useEffect(() => {
    if (!id) {
      return;
    }

    getFormHabit({ variables: { id } });
  }, [getFormHabit, id]);

  return result;
};

const GET_FORM_HABIT_QUERY = gql`
  query GetFormHabitQuery($id: ID!) {
    habit(id: $id) {
      id
      name
    }
  }
`;
