import { from } from "@apollo/client";

import { errorLink } from "./errorLink";
import { schemaLink } from "./schemaLink";

export const link = from([errorLink, schemaLink]);
