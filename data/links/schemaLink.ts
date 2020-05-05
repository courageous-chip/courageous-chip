import { SchemaLink } from "@apollo/link-schema";

import { schema } from "../schema";

export const schemaLink = new SchemaLink({ schema });
