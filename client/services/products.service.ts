import axios from "axios";

export function getProductsService() {
	return axios.get(
		process.env.RAPID_API_URL!, {
			params: {
				limit: '48',
				categoryId: '4209',
				offset: '0',
				store: 'US',
				lang: 'en-US',
				sizeSchema: 'US',
				currency: 'USD',
				sort: 'freshness',
				country: 'US',
			},
			headers: {
				'X-RapidAPI-Key': process.env.RAPID_API_KEY,
				'X-RapidAPI-Host': process.env.RAPID_API_HOST
			}
		}
	)
		.then(res => res.data)
		.catch((err) => err)


	// return new Promise(() => console.log(process.env.RAPID_API_KEY, process.env.RAPID_API_HOST,process.env.RAPID_API_URL))

}
