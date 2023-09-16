import axios from "axios";

export default axios.create({
	baseURL: "https://api.yelp.com/v3/businesses/",
	headers: {
		Authorization:
			"Bearer fsB1TyVB-0ToVw9aUAeXLTWyZ-40XIx7S6I63T2oM5ar4HWZzhEB1XExO_lCG7MkUqIR_9tnbL1hOTwlkT_vDhDnHPSpq5WviUhmLYIPyHouZo8DLNFRe40bd2wEZXYx",
	},
});
