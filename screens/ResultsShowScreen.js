import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image } from "react-native";

import LoadingScreen from "./LoadingScreen";
import yelp from "../api/yelp";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function ResultsShowScreen({ route }) {
	const id = route.params.id;
	const [result, setResult] = useState(null);

	const getResult = async (id) => {
		const response = await yelp.get(`${id}`);
		setResult(response.data);
	};

	useEffect(() => {
		getResult(id);
	}, []);

	return !result ? (
		<LoadingScreen />
	) : (
		<View>
			<Text style={styles.title}>{result.name}</Text>

			<Text style={styles.phone}>{result.phone}</Text>

			<View style={styles.icon}>
				{result.is_closed ? (
					<AntDesign name="closecircleo" size={30} color="black" />
				) : (
					<MaterialIcons name="delivery-dining" size={30} color="black" />
				)}
			</View>

			<FlatList
				data={result.photos}
				renderItem={({ item }) => (
					<Image style={styles.image} source={{ uri: item }} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	title: {
		alignSelf: "center",

		marginVertical: 10,

		fontSize: 25,
	},

	phone: {
		alignSelf: "center",

		fontSize: 20,
	},

	icon: {
		alignSelf: "center",
	},

	image: {
		margin: 10,

		height: 180,
		borderRadius: 20,
	},
});
