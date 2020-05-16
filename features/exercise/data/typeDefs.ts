import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    exercise(id: ID!): Exercise!
    exercises: [Exercise!]!
  }

  type Exercise {
    id: ID!
    name: String!
  }
`;
