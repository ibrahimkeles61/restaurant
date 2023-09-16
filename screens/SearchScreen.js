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
								title="Cüzdan Dostu Mekanlar"
								results={filterResultsByPrice("₺")}
							/>

							<ResultsList
								title="Beyaz Yakalıların Tercihleri"
								results={filterResultsByPrice("₺₺")}
							/>

							<ResultsList
								title="Gurmelerin Seçimleri"
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
