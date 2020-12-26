import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const DATO_TOKEN = '56ecb7c941d3c39aa2ff64b6214b43';
const httpLink = createHttpLink({
  uri: 'https://graphql.datocms.com/'
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${DATO_TOKEN}`,
    }
  }
});

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})
