import Joi from 'joi'
import {User} from "~/middlewares/models/user.model";

/**
 * @description uses Joi library to validate credentials from register form
 * @param data
 */
export function registerValidate(data: unknown) {
	const schema = Joi.object({
		firstname: Joi.string()
			.required(),

		lastname: Joi.string()
			.required(),

		password: Joi.string()
			.required()
			.pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})'))
			.min(7)
		,

		repeat_password: Joi.ref('password'),

		email: Joi.string()
			.email({ minDomainSegments: 2, tlds: { allow: ['com', 'fr'] } })
			.required()
	})
		.with('password', 'repeat_password');

	const result = schema.validate(data)
	if(result.error) return {hasError: true, value: result.error.details["0"]}
	return {hasError: false, ...result}
}

/**
 * @description uses Joi library to validate credentials from login form
 * @param data
 */
export function loginValidate(data: unknown) {
	const schema = Joi.object({
		email: Joi.string()
			.email({minDomainSegments: 2, tlds: {allow: ['com', 'fr']}})
			.required(),
		password: Joi.string()
			.required()
	})

	const result = schema.validate(data)
	if(result.error) return {hasError: true, value: result.error.details["0"]}
	return {hasError: false, ...result}
}


export async function isUnique(email: string) {
	return (await User.findOne({email: email}))
}
