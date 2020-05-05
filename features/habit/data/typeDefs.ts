import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    habits: [Habit!]!
  }

  type Habit {
    id: ID!
    name: String!
  }
`;
