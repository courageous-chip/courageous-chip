import { gql } from "@apollo/client";
import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { ScrollView, StyleSheet } from "react-native";

import { Button } from "../../ui/form/Button";
import { TextField } from "../../ui/form/TextField";
import { ListHabitsQuery } from "../list/__generated__/ListHabitsQuery";

type Props = { id?: ListHabitsQuery["habits"][0]["id"] };

export const HabitForm: FC<Props> = function ({ id }) {
  const {
    colors: { background: backgroundColor },
  } = useTheme();

  return (
    <ScrollView style={[styles.container, { backgroundColor }]}>
      <TextField
        marginBottom={styles.nameInput.marginBottom}
        placeholder="🦷 Floss Teeth"
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
