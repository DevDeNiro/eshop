import {Request, Response} from "express";
import {isUnique, loginValidate, registerValidate} from "~/services/validation.services";
import {format} from "~/errors/register.errors";
import bcrypt from "bcrypt"
import {User} from "~/middlewares/models/user.model";
import {genTokens} from "~/services/jwt.services";

export const register = async(req: Request, res: Response) => {
	const {hasError, value} = registerValidate(req.body)

	if(hasError) return res.status(400).json({type: "error", data:{...format(value)}})

	if(!!await isUnique(value.email)) return res.status(400).json({type: "error", data: {fields: ["email"], error: "This email already exists."}})

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

export const login = async(req: Request, res: Response) => {
	const {hasError, value} = loginValidate(req.body)

	if(hasError) return res.status(400).json({type: "error", data:{...format(value)}})

	const foundUser = await User.findOne({email: value.email})
	if(!foundUser) return res.status(404).json({type: "error", data:{fields: [], error: "No user found with these credentials"}})

	const verifiedPassword = await bcrypt.compare(value.password, foundUser.password)

	if(!verifiedPassword) return res.status(404).json({type: "error", data:{fields: [], error: "No user found with these credentials"}})

	const { password, ...data } = foundUser.toJSON()

	const tokens = genTokens({id: foundUser._id, firstname: foundUser.firstname})
	res.status(200).json({type: "success", data: {user: data, tokens}})
}
