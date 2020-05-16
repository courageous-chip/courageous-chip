/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListExercisesQuery
// ====================================================

export interface GetListExercisesQuery_exercises {
  readonly __typename: "Exercise";
  readonly id: string;
  readonly name: string;
}

export interface GetListExercisesQuery {
  readonly exercises: ReadonlyArray<GetListExercisesQuery_exercises>;
}
