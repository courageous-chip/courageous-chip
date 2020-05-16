import { gql } from "@apollo/client";

import { typeDefs as exerciseTypeDefs } from "../features/exercise/data/typeDefs";
import { typeDefs as habitTypeDefs } from "../features/habit/data/typeDefs";

const rootTypeDefs = gql`
  type Mutation
  type Query
`;

export const typeDefs = [rootTypeDefs, exerciseTypeDefs, habitTypeDefs];
