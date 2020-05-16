/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteHabitInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteHabitMutation
// ====================================================

export interface DeleteHabitMutation_deleteHabit {
  readonly __typename: "DeleteHabitOutput";
  readonly id: string;
}

export interface DeleteHabitMutation {
  readonly deleteHabit: DeleteHabitMutation_deleteHabit;
}

export interface DeleteHabitMutationVariables {
  readonly habit: DeleteHabitInput;
}
