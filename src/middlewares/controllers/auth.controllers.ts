import {Request, Response} from "express";
import {isUnique, registerValidate} from "~/services/validation.services";
import {format} from "~/errors/register.errors";
import bcrypt from "bcrypt"
import {User} from "~/middlewares/models/user.model";

export const register = async(req: Request, res: Response) => {
	const {hasError, value} = registerValidate(req.body)

	if(hasError) return res.status(400).json({type: "error", data:{...format(value)}})

	const emailExists = await isUnique(value.email)

	if(emailExists) return res.status(400).json({type: "error", data: {fields: ["email"], error: "This email already exists."}})

	const hashedPassword = await bcrypt.hash(value.password, 10)

	try {
		const user = await User.create({
			...value,
			password: hashedPassword
		})
		const savedUser = await user.save()

		const { password, ...data } = savedUser.toJSON()

		res.status(201).json({type: "success", data})
	} catch (e) {
		res.status(500).json({type: "error", data: {e}})
	}
}
