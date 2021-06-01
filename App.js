import React from "react";
import client from "./apollo";
import { ApolloProvider } from "@apollo/client";
import LandingPage from "./components/LandingPage";

export default function App() {
	return (
		<ApolloProvider client={client}>
			<LandingPage />
		</ApolloProvider>
	);
}
