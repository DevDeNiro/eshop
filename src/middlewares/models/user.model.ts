import {model, Schema} from "mongoose";

const UserSchema = new Schema({
	firstname: {
		type: String,
		required: true
	},
	lastname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	orders: {
		type: Array,
		default: [],
	}

}, {timestamps: true})

export const User = model('User', UserSchema)
