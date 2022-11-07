export function format(value: any) {
	let formattedError: {
		field: string[],
		error: string
	} = {
		field: [],
		error: ""
	}
	switch (value.type) {
		case "any.only":
			if(value.path[0] === "repeat_password") {
				formattedError = {error:  "The passwords do not match.", field: ["password", "repeat_password"]}
			}
			break
		case "string.email":
			formattedError = {error:  "The provided email is incorrect.", field: ["email"]}
			break
		case "string.pattern.base":
			formattedError = {error:  "The provided password is not strong enough", field: ["password"]}
			break
		default:
			formattedError.error =  "Please fill all the fields."
			break
	}

	return formattedError
}
