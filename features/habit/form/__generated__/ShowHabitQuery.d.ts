/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ShowHabitQuery
// ====================================================

export interface ShowHabitQuery_habit {
  readonly __typename: "Habit";
  readonly id: string;
  readonly name: string;
}

export interface ShowHabitQuery {
  readonly habit: ShowHabitQuery_habit;
}

export interface ShowHabitQueryVariables {
  readonly id: string;
}
