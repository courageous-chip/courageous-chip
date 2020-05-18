import { gql } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Button } from "../../ui/form/Button";
import { TextField } from "../../ui/form/TextField";
import { ListExercisesQuery } from "../list/__generated__/ListExercisesQuery";

type Props = { id?: ListExercisesQuery["exercises"][0]["id"] };

export const ExerciseForm: FC<Props> = function ({ id }) {
  const {
    colors: { background: backgroundColor },
  } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <TextField
        marginBottom={styles.nameInput.marginBottom}
        placeholder="💪 Biceps Curl"
      />
      <Button marginBottom={styles.saveButton.marginBottom} text="💾" />
      {id ? <Button text="🗑" /> : null}
    </ScrollView>
  );
};

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
