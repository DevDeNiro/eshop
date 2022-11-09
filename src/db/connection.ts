import mongoose from "mongoose"

export default function connect(uri: string) {
	mongoose
		.connect(uri)
		.then(() => console.log("Database connected"))
		.catch((error) => console.log("db error", error))
}
