/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetHabits
// ====================================================

export interface GetHabits_habits {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface GetHabits {
  readonly habits: ReadonlyArray<GetHabits_habits>;
}
