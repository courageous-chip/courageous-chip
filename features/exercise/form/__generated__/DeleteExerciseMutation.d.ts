/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { DeleteExerciseInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: DeleteExerciseMutation
// ====================================================

export interface DeleteExerciseMutation_deleteExercise {
  readonly __typename: "DeleteExerciseOutput";
  readonly id: string;
}

export interface DeleteExerciseMutation {
  readonly deleteExercise: DeleteExerciseMutation_deleteExercise;
}

export interface DeleteExerciseMutationVariables {
  readonly exercise: DeleteExerciseInput;
}
