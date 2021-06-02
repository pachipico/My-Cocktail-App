import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Drink = ({ data }) => {
	return (
		<View style={styles.drinkContainer}>
			<View style={styles.imgContainer}>
				<Image style={styles.drinkImage} source={{ uri: data.strDrinkThumb }} />
			</View>
			<View style={styles.textContainer}>
				<View style={styles.nameContainer}>
					<Text style={styles.drinkName}>{data.strDrink} </Text>
				</View>
				<View style={styles.tagsContainer}>
					<Text style={styles.tags}> #Alchohol</Text>
					<Text style={styles.tags}> #Ordinary Drink</Text>
				</View>
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
		padding: 1,
	},
	drinkImage: {
		height: "100%",
		borderRadius: 3,
	},
	textContainer: {
		flexGrow: 1,
	},
	nameContainer: {
		flex: 1,
		backgroundColor: "#C4C4C4",
		justifyContent: "center",
		paddingLeft: 10,
	},
	tagsContainer: {
		justifyContent: "space-evenly",
		flex: 1,
		paddingLeft: 10,
	},
	drinkName: {
		fontSize: 23,
	},
	tags: {
		fontSize: 20,
	},
});

export default Drink;
