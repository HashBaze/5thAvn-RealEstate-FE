import { ApolloClient, InMemoryCache, HttpLink, ApolloLink } from '@apollo/client';

const authLink = new ApolloLink((operation, forward) => {
  const token = localStorage.getItem('authToken'); 

  operation.setContext({
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

  return forward(operation); 
});

const httpLink = new HttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL, 
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
