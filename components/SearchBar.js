import { StyleSheet, Text, View, TextInput } from "react-native";

import { AntDesign } from "@expo/vector-icons";

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
	return (
		<View style={styles.backgroundStyle}>
			<AntDesign
				style={styles.iconStyle}
				name="search1"
				size={30}
				color="black"
			/>

			<TextInput
				style={styles.inputStyle}
				placeholder="Ara"
				autoCorrect={false}
				autoCapitalize="none"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	backgroundStyle: {
		flexDirection: "row",
		alignItems: "center",

		margin: 10,

		height: 50,
		backgroundColor: "lightgray",
		borderRadius: 20,
	},

	iconStyle: {
		marginHorizontal: 15,
	},

	inputStyle: {
		flex: 1,

		fontSize: 18,
	},
});
