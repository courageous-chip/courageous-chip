/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFormExerciseQuery
// ====================================================

export interface GetFormExerciseQuery_exercise {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface GetFormExerciseQuery {
  readonly exercise: GetFormExerciseQuery_exercise;
}

export interface GetFormExerciseQueryVariables {
  readonly id: string;
}
