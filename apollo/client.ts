// Integration to use graphql api with apollo
import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

// No Subscription is required for develop process

const httpLink = createHttpLink({
  uri: "http://localhost:3007/graphql", // why we use uri not url?
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
