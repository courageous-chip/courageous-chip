import { ApolloClient } from "@apollo/client";

import { cache } from "./cache";
import { link } from "./links/link";

export const client = new ApolloClient({ cache, link });
