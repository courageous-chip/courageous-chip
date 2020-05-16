import { gql, useLazyQuery } from "@apollo/client";
import React, { FC, useEffect } from "react";

import { EmptyView } from "../../ui/EmptyView";
import { ListExercisesQuery } from "../list/__generated__/ListExercisesQuery";
import {
  ShowExerciseQuery,
  ShowExerciseQueryVariables,
} from "./__generated__/ShowExerciseQuery";

type Props = { id?: ListExercisesQuery["exercises"][0]["id"] };

export const ExerciseForm: FC<Props> = function ({ id }) {
  const { data, error, loading } = useExerciseMaybe(id);

  return <EmptyView />;
};

const useExerciseMaybe = (id: Props["id"]) => {
  const [showExercise, result] = useLazyQuery<
    ShowExerciseQuery,
    ShowExerciseQueryVariables
  >(SHOW_EXERCISE_QUERY);

  useEffect(() => {
    if (!id) {
      return;
    }

    showExercise({ variables: { id } });
  }, [id, showExercise]);

  return result;
};

const CREATE_EXERCISE_MUTATION = gql`
  mutation CreateExerciseMutation($exercise: CreateExerciseInput!) {
    createExercise(exercise: $exercise) {
      id
      name
    }
  }
`;

const DELETE_EXERCISE_MUTATION = gql`
  mutation DeleteExerciseMutation($exercise: DeleteExerciseInput!) {
    deleteExercise(exercise: $exercise) {
      id
    }
  }
`;

const UPDATE_EXERCISE_MUTATION = gql`
  mutation UpdateExerciseMutation($exercise: UpdateExerciseInput!) {
    updateExercise(exercise: $exercise) {
      id
      name
    }
  }
`;

const SHOW_EXERCISE_QUERY = gql`
  query ShowExerciseQuery($id: ID!) {
    exercise(id: $id) {
      id
      name
    }
  }
`;
