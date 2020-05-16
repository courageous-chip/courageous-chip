/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateHabitInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateHabitMutation
// ====================================================

export interface UpdateHabitMutation_updateHabit {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface UpdateHabitMutation {
  readonly updateHabit: UpdateHabitMutation_updateHabit;
}

export interface UpdateHabitMutationVariables {
  readonly habit: UpdateHabitInput;
}
