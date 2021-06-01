import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/client";

import Main from "./Main";

const GET_DRINKS = gql`
	{
		getRandomSelection {
			idDrink
			strDrink
			strDrinkThumb
		}
	}
`;

const LandingPage = () => {
	const { loading, error, data } = useQuery(GET_DRINKS);

	if (loading) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>Loading...</Text>
			</View>
		);
	} else {
		return <Main drinks={data} />;
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	text: {
		fontSize: 60,
	},
});

export default LandingPage;
