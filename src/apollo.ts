import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
} from "@apollo/client";

export const client = new ApolloClient({
	cache: new InMemoryCache(),
  link: new HttpLink({
    // uri: 'https://cristinadevelopmentp.herokuapp.com/graphql',
    uri: `${process.env.APIP_URL}/graphql`,
    fetch
  }),
  connectToDevTools: true,
});
export const clientSite = new ApolloClient({
	cache: new InMemoryCache(),
  link: new HttpLink({
    // uri: 'https://cristinadevelopments.herokuapp.com/graphql',
    uri: `${process.env.APIS_URL}/graphql`,
    // uri: 'http://localhost:8002/graphql',
    fetch
  }),
  connectToDevTools: true,
});
