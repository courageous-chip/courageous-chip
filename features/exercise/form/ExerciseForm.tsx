import { gql, useLazyQuery } from "@apollo/client";
import React, { FC, useEffect } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { GetListExercisesQuery } from "../list/__generated__/GetListExercisesQuery";
import {
  GetFormExerciseQuery,
  GetFormExerciseQueryVariables,
} from "./__generated__/GetFormExerciseQuery";

type Props = { id?: GetListExercisesQuery["exercises"][0]["id"] };

export const ExerciseForm: FC<Props> = function ({ id }) {
  const { data, error, loading } = useFormExerciseMaybe(id);

  return <EmptyView />;
};

const useFormExerciseMaybe = (id: Props["id"]) => {
  const [getFormExercise, result] = useLazyQuery<
    GetFormExerciseQuery,
    GetFormExerciseQueryVariables
  >(GET_FORM_EXERCISE_QUERY);

  useEffect(() => {
    if (!id) {
      return;
    }

    getFormExercise({ variables: { id } });
  }, [getFormExercise, id]);

  return result;
};

const GET_FORM_EXERCISE_QUERY = gql`
  query GetFormExerciseQuery($id: ID!) {
    exercise(id: $id) {
      id
      name
    }
  }
`;
