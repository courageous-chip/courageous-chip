import { Resolvers } from "@apollo/client";

import { resolvers as exerciseResolvers } from "../features/exercise/data/resolvers";
import { resolvers as habitResolvers } from "../features/habit/data/resolvers";

const rootResolvers: Resolvers = {
  Query: {},
};

export const resolvers = [rootResolvers, exerciseResolvers, habitResolvers];
