module.exports = {
  client: {
    excludes: ["**/node_modules", "**/__tests__", "**/typeDefs.ts"],
    includes: ["features/**/*.{graphql,gql,js,jsx,ts,tsx}"],
    service: {
      localSchemaFile: "./data/schema.graphql",
      name: "courageous-chip",
    },
  },
};
