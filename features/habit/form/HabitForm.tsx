import { gql, useApolloClient } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import { GraphQLError } from "graphql";
import React, { FC, useEffect, useReducer } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { ErrorView } from "../../ui/ErrorView";
import { Button } from "../../ui/form/Button";
import { TextField } from "../../ui/form/TextField";
import { ListHabitsQuery } from "../list/__generated__/ListHabitsQuery";
import {
  ShowHabitQuery,
  ShowHabitQueryVariables,
} from "./__generated__/ShowHabitQuery";
import { ActionType } from "./reducer/ActionType";
import { initialState } from "./reducer/initialState";
import { reducer } from "./reducer/reducer";

type Props = { id?: ListHabitsQuery["habits"][0]["id"] };

export const HabitForm: FC<Props> = function ({ id }) {
  const client = useApolloClient();
  const {
    colors: { background: backgroundColor },
  } = useTheme();
  const [{ error, id: _id, loading, name, valid }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  useEffect(() => {
    const showHabit = async () => {
      if (!id) {
        return;
      }

      dispatch({ type: ActionType.ShowHabitRequest });

      const { data, errors } = await client.query<
        ShowHabitQuery,
        ShowHabitQueryVariables
      >({
        fetchPolicy: "network-only",
        query: SHOW_HABIT_QUERY,
        variables: { id },
      });

      if (errors) {
        return dispatch({
          error: reduceGraphQLErrors(errors),
          type: ActionType.ShowHabitFailure,
        });
      }

      if (!data) {
        return dispatch({
          error: new Error("Fetching the habit failed. Please try again."),
          type: ActionType.ShowHabitFailure,
        });
      }

      const {
        habit: { id: requestedId, name },
      } = data;

      dispatch({ id: requestedId, name, type: ActionType.ShowHabitSuccess });
    };

    showHabit();
  }, [client, id]);

  return error && id ? (
    <ErrorView />
  ) : (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <TextField
        autoFocus
        marginBottom={styles.nameInput.marginBottom}
        onChangeText={(name) => dispatch({ name, type: ActionType.ChangeName })}
        placeholder="🦷 Floss Teeth"
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

const SHOW_HABIT_QUERY = gql`
  query ShowHabitQuery($id: ID!) {
    habit(id: $id) {
      id
      name
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
