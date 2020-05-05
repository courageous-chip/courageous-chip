import { gql } from "@apollo/client";

export const typeDefs = gql`
  extend type Query {
    exercises: [Exercise!]!
  }

  type Exercise {
    id: ID!
    name: String!
  }
`;
