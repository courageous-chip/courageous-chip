import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Mutation {
    createHabit(habit: CreateHabitInput!): Habit!
    deleteHabit(habit: DeleteHabitInput): DeleteHabitOutput!
    updateHabit(habit: UpdateHabitInput!): Habit!
  }

  input CreateHabitInput {
    name: String!
  }

  input DeleteHabitInput {
    id: ID!
  }

  type DeleteHabitOutput {
    id: ID!
  }

  input UpdateHabitInput {
    id: ID!
    name: String!
  }

  extend type Query {
    habit(id: ID!): Habit!
    habits: [Habit!]!
  }

  type Habit {
    id: ID!
    name: String!
  }
`;
