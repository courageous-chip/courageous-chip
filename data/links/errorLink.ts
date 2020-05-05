import { onError } from "@apollo/link-error";
import { GraphQLError } from "graphql";
import { captureException } from "sentry-expo";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    const message = graphQLErrors.map(mapGraphQLErrorToError).join("\n");
    const error = new Error(message);

    captureException(error);
  }

  if (networkError) {
    captureException(networkError);
  }
});

function mapGraphQLErrorToError({
  locations,
  message,
  path,
}: GraphQLError): Error {
  const messageParts = [`[GraphQL Error]: message: ${message}`];

  if (locations) {
    const location = JSON.stringify(locations);

    messageParts.push(`location: ${location}`);
  }

  if (path) {
    messageParts.push(`path: ${path}`);
  }

  return new Error(messageParts.join(", "));
}
