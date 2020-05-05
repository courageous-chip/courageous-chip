import { promises as fs } from "fs";
import { printSchema } from "graphql";
import * as prettier from "prettier";

import { schema } from "../data/schema";

// Exit with a failure (1) status code on an unhandled rejection.
process.once("unhandledRejection", (error) => {
  throw error;
});

(async function () {
  const printedSchema = printSchema(schema);
  const prettiedSchema = prettier.format(printedSchema, { parser: "graphql" });

  await fs.writeFile("./data/schema.graphql", prettiedSchema);
})();
