import Joi from 'joi'

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
