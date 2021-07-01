import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import { createHttpLink, HttpLink } from "apollo-link-http";

const linkChain = createPersistedQueryLink().concat(
  new HttpLink({ uri: `${process.env.REACT_APP_BACKEND_URL}/graphql` })
);
// const link = new HttpLink({
//     // uri: `http://api.rcgmedia.mx/graphql`
//     uri: `${process.env.REACT_APP_BACKEND_URL}/graphql`
// });

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: linkChain,
});

export default client;