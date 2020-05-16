/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateHabitInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateHabitMutation
// ====================================================

export interface CreateHabitMutation_createHabit {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface CreateHabitMutation {
  readonly createHabit: CreateHabitMutation_createHabit;
}

export interface CreateHabitMutationVariables {
  readonly habit: CreateHabitInput;
}
