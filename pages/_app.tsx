import "../src/styles/globals.css";
import type { AppProps } from "next/app";
import {
	ApolloProvider
} from "@apollo/client";
import { client } from "../src/apollo";
import { AuthProvider } from "../src/context";
import { SessionProvider } from "next-auth/react"
import { SWRConfig } from "swr";
import request from "graphql-request";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<SessionProvider>
			<SWRConfig
				value={{
					fetcher: query => request(`${process.env.APIS_URL}/graphql`, query),
					refreshInterval: 3000
				}}
			>
				<ApolloProvider client={ client }>
					<AuthProvider>
						<Component {...pageProps} />
					</AuthProvider>
				</ApolloProvider>
			</SWRConfig>
		</SessionProvider>
	);
}

export default MyApp;
