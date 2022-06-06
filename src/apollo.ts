import {
	ApolloClient,
	InMemoryCache,
	HttpLink,
} from "@apollo/client";

export const client = new ApolloClient({
	cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://cristinadevelopmentp.herokuapp.com/graphql",
    // uri: "http://localhost:8000/graphql",
    fetch
  }),
  connectToDevTools: true,
});
export const clientSite = new ApolloClient({
	cache: new InMemoryCache(),
  link: new HttpLink({
    // uri: "https://cristinadevelopmentp.herokuapp.com/graphql",
    uri: "http://localhost:8002/graphql",
    fetch
  }),
  connectToDevTools: true,
});
