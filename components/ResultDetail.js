import { StyleSheet, Text, View, Image } from "react-native";

export default function ResultDetail({ result }) {
	return (
		<View style={styles.container}>
			<Image
				style={styles.image}
				source={result.image_url ? { uri: result.image_url } : null}
			/>
			<Text style={styles.name}>{result.name}</Text>
			<Text>
				{result.rating} Stars Restaurant, {result.review_count} Reviews
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginLeft: 15,
	},

	image: {
		marginBottom: 5,

		width: 250,
		height: 120,
		borderRadius: 8,
	},

	name: {
		fontWeight: "bold",
	},
});
