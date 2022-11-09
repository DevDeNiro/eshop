import axios from "axios";

export function getProductsService() {
	return axios.get(
		'https://asos2.p.rapidapi.com/products/v2/list', {
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
				'X-RapidAPI-Key': 'd0d3471d3emsh609102a98bc5935p166061jsn914205307d89',
				'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
			}
		}
	)
		.then(res => res.data)

}
