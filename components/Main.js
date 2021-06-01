import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const LandingPage = ({ drinks }) => {
	console.log(drinks.getRandomSelection[0]);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text>The Cocktails</Text>
			</View>
			<View style={styles.body}>
				<Text>sfaslkmfsamflka</Text>
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
		flex: 6,
		backgroundColor: "cyan",
	},
});

export default LandingPage;
