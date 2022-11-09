import axios from "axios";

export function getUserService(tokens: {accessToken: string, refreshToken: string}, signal: AbortSignal) {
	return axios.get("/api/user/", {
		signal,
		headers: {
			access: tokens.accessToken,
			refresh: tokens.refreshToken
		}
	})
		.then(res => res.status === 200 && res.data)
		.catch((err) => err.response.data)
}
