import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Mutation {
    createExercise(exercise: CreateExerciseInput!): Exercise!
    deleteExercise(exercise: DeleteExerciseInput): DeleteExerciseOutput!
    updateExercise(exercise: UpdateExerciseInput!): Exercise!
  }

  input CreateExerciseInput {
    name: String!
  }

  input DeleteExerciseInput {
    id: ID!
  }

  type DeleteExerciseOutput {
    id: ID!
  }

  input UpdateExerciseInput {
    id: ID!
    name: String!
  }

  extend type Query {
    exercise(id: ID!): Exercise!
    exercises: [Exercise!]!
  }

  type Exercise {
    id: ID!
    name: String!
  }
`;
