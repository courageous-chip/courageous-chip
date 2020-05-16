/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CreateExerciseInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: CreateExerciseMutation
// ====================================================

export interface CreateExerciseMutation_createExercise {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface CreateExerciseMutation {
  readonly createExercise: CreateExerciseMutation_createExercise;
}

export interface CreateExerciseMutationVariables {
  readonly exercise: CreateExerciseInput;
}
