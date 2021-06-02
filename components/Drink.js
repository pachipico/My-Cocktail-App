import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Drink = () => {
	return (
		<View style={styles.drinkContainer}>
			<View style={styles.imgContainer}></View>
			<View style={styles.nameContainer}>
				<Text style={styles.drinkName}>Martini </Text>
			</View>
			<View style={styles.tagsContainer}>
				<Text style={styles.tags}> #Alchohol</Text>
				<Text style={styles.tags}> #Ordinary Drink</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	drinkContainer: {
		flexDirection: "row",
		backgroundColor: "white",
		height: 115,
		borderWidth: 1,
	},
	imgContainer: {
		width: 110,
		backgroundColor: "yellow",
	},
	nameContainer: {
		flexGrow: 1,
		backgroundColor: "cyan",
		justifyContent: "center",
		alignItems: "center",
	},
	tagsContainer: {
		flexGrow: 1,
		justifyContent: "space-evenly",
	},
	drinkName: {
		fontSize: 25,
	},
	tags: {
		fontSize: 20,
	},
});

export default Drink;
