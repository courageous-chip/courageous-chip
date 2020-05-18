import { gql, useApolloClient } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import { GraphQLError } from "graphql";
import React, { FC, useEffect, useReducer } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { ErrorView } from "../../ui/ErrorView";
import { Button } from "../../ui/form/Button";
import { TextField } from "../../ui/form/TextField";
import { ListExercisesQuery } from "../list/__generated__/ListExercisesQuery";
import {
  ShowExerciseQuery,
  ShowExerciseQueryVariables,
} from "./__generated__/ShowExerciseQuery";
import { ActionType } from "./reducer/ActionType";
import { initialState } from "./reducer/initialState";
import { reducer } from "./reducer/reducer";

type Props = { id?: ListExercisesQuery["exercises"][0]["id"] };

export const ExerciseForm: FC<Props> = function ({ id }) {
  const client = useApolloClient();
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const [{ error, id: _id, loading, name, valid }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const showExercise = async () => {
      if (!id) {
        return;
      }

      dispatch({ type: ActionType.ShowExerciseRequest });

      const { data, errors } = await client.query<
        ShowExerciseQuery,
        ShowExerciseQueryVariables
      >({
        fetchPolicy: "network-only",
        query: SHOW_EXERCISE_QUERY,
        variables: { id },
      });

      if (errors) {
        return dispatch({
          error: reduceGraphQLErrors(errors),
          type: ActionType.ShowExerciseFailure,
        });
      }

      if (!data) {
        return dispatch({
          error: new Error("Fetching the exercise failed. Please try again."),
          type: ActionType.ShowExerciseFailure,
        });
      }

      const {
        exercise: { id: requestedId, name },
      } = data;

      dispatch({ id: requestedId, name, type: ActionType.ShowExerciseSuccess });
    };

    showExercise();
  }, [client, id]);

  return error && id ? (
    <ErrorView />
  ) : (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <TextField
        autoFocus
        marginBottom={styles.nameInput.marginBottom}
        onChangeText={(name) => dispatch({ name, type: ActionType.ChangeName })}
        placeholder="💪 Biceps Curl"
        value={name ?? undefined}
      />
      <Button
        loading={loading}
        marginBottom={styles.saveButton.marginBottom}
        text="💾"
        valid={valid}
      />
      {id ? <Button loading={loading} text="🗑" /> : null}
    </ScrollView>
  );
};

function reduceGraphQLErrors(errors: readonly GraphQLError[]): Error {
  const message = errors.map((error) => error.message).join("\n");

  return new Error(message);
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 20, paddingVertical: 10 },
  nameInput: { marginBottom: 20 },
  saveButton: { marginBottom: 10 },
});

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

const SHOW_EXERCISE_QUERY = gql`
  query ShowExerciseQuery($id: ID!) {
    exercise(id: $id) {
      id
      name
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
