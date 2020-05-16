/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListHabitsQuery
// ====================================================

export interface ListHabitsQuery_habits {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface ListHabitsQuery {
  readonly habits: ReadonlyArray<ListHabitsQuery_habits>;
}
