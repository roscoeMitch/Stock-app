import axios from "axios";

//This is used to autocomplete the token part of the fetchData URL
const TOKEN = "chr0uehr01qkb63aoqi0chr0uehr01qkb63aoqig"

export default axios.create({
	baseURL: "https://finnhub.io/api/v1",
	params: {
		token: TOKEN
	}
})