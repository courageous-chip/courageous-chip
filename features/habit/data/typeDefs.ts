import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    habit(id: ID!): Habit!
    habits: [Habit!]!
  }

  type Habit {
    id: ID!
    name: String!
  }
`;
