import axios from "axios";

export function registerService(data: any, signal: AbortSignal) {
	return axios.post("/api/auth/register", data, {
		signal
	})
		.then(res => res.status === 201 && res.data)
		.catch((err) => err.response.data)
}

export function loginService(data: any, signal: AbortSignal) {
	return axios.post("/api/auth/login", data, {
		signal
	})
		.then(res => res.status === 200 && res.data)
		.catch((err) => err.response.data)
}

export function logoutService(signal: AbortSignal) {
	return axios.post("/api/auth/logout", {}, {
		signal
	})
		.then(res => res.status === 204 && res.data)
		.catch((err) => err.response.data)
}


