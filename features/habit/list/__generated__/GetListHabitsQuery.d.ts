/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetListHabitsQuery
// ====================================================

export interface GetListHabitsQuery_habits {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface GetListHabitsQuery {
  readonly habits: ReadonlyArray<GetListHabitsQuery_habits>;
}
