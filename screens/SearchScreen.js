import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";

import SearchBar from "../components/SearchBar";

import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
	const [searchApi, results, errorMessage] = useResults();
	const [term, setTerm] = useState("");

	const filterResultsByPrice = (price) =>
		results.filter((result) => result.price === price);

	return (
		<View>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>

			{errorMessage ? (
				<Text>{errorMessage}</Text>
			) : (
				<>
					{results.length > 0 && (
						<>
							<ResultsList
								title="Budget Friendly Places"
								results={filterResultsByPrice("₺")}
							/>

							<ResultsList
								title="For You, Me, All Of Us"
								results={filterResultsByPrice("₺₺")}
							/>

							<ResultsList
								title="Gourmet's Choices"
								results={filterResultsByPrice("₺₺₺")}
							/>
						</>
					)}
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({});
