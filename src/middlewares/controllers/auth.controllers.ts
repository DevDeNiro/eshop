import {Request, Response} from "express";
import {registerValidate} from "~/services/validation.services";
import {format} from "~/errors/register.errors";

export const register = async(req: Request, res: Response) => {
	const {hasError, value} = registerValidate(req.body)

	if(hasError) return res.status(400).json(format(value))
	res.json(value)
}
