import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Drink from "./Drink";

const LandingPage = ({ drinks }) => {
	console.log(drinks.getRandomSelection);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>The Cocktails</Text>
			</View>
			<View style={styles.body}>
				<ScrollView bounces='false'>
					{drinks.getRandomSelection.map((drink, index) => {
						return <Drink data={drink} key={index} />;
					})}
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
	},
	header: {
		flex: 1,
		backgroundColor: "#f5e6ca",
	},
	body: {
		flex: 1.3,
		backgroundColor: "#f5e6ca",
	},
});

export default LandingPage;
