/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetExercises
// ====================================================

export interface GetExercises_exercises {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface GetExercises {
  readonly exercises: ReadonlyArray<GetExercises_exercises>;
}
