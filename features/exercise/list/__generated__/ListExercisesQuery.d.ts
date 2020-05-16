/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListExercisesQuery
// ====================================================

export interface ListExercisesQuery_exercises {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface ListExercisesQuery {
  readonly exercises: ReadonlyArray<ListExercisesQuery_exercises>;
}
