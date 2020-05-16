/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShowExerciseQuery
// ====================================================

export interface ShowExerciseQuery_exercise {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface ShowExerciseQuery {
  readonly exercise: ShowExerciseQuery_exercise;
}

export interface ShowExerciseQueryVariables {
  readonly id: string;
}
