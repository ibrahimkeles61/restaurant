import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import ResultDetail from "./ResultDetail";
import { useNavigation } from "@react-navigation/native";

export default function ResultsList({ title, results }) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>

			<FlatList
				data={results}
				renderItem={({ item }) => {
					return (
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("ResultsShow", { id: item.id })
							}
						>
							<ResultDetail result={item} />
						</TouchableOpacity>
					);
				}}
				horizontal
				showsHorizontalScrollIndicator={false}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
	},

	title: {
		marginLeft: 15,
		marginBottom: 5,

		fontSize: 18,
		fontWeight: "bold",
	},
});
