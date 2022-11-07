import jwt from "jsonwebtoken"
import {Types} from "mongoose";

export function genTokens({id, firstname}: {id: Types.ObjectId, firstname: string}) {
	const accessToken = jwt.sign({
		id: id,
		firstname: firstname
	}, process.env.JWT_SECRET!, {
		expiresIn: '10min'
	})
	const refreshToken = jwt.sign({
		id: id,
	}, process.env.JWT_SECRET!, {
		expiresIn: '7d'
	})

	return {
		accessToken: `Bearer ${accessToken}`,
		refreshToken: `Bearer ${refreshToken}`,
	}
}
