/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UpdateExerciseInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateExerciseMutation
// ====================================================

export interface UpdateExerciseMutation_updateExercise {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface UpdateExerciseMutation {
  readonly updateExercise: UpdateExerciseMutation_updateExercise;
}

export interface UpdateExerciseMutationVariables {
  readonly exercise: UpdateExerciseInput;
}
