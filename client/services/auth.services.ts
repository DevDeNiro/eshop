import axios from "axios";

export async function registerService(data: any, signal: AbortSignal) {
		return axios.post("/api/auth/register", data, {
			signal
		})
			.then(res => res.status === 200 || 201 && res.data)
			.catch((err) => err.response.data)
}


