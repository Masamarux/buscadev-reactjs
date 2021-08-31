import { ApolloClient, InMemoryCache } from "@apollo/client";

const {REACT_APP_AUTH_TOKEN} = process.env;

const apollo = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    'Authorization': `Bearer ${REACT_APP_AUTH_TOKEN}`,
  }
});

export default apollo;
