/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetFormHabitQuery
// ====================================================

export interface GetFormHabitQuery_habit {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface GetFormHabitQuery {
  readonly habit: GetFormHabitQuery_habit;
}

export interface GetFormHabitQueryVariables {
  readonly id: string;
}
