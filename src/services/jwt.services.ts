import jwt from "jsonwebtoken";
import {Types} from "mongoose";
import {NextFunction, Request, Response} from "express";
import {User} from "~/middlewares/models/user.model";


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

export async function verifyTokens(req: Request, res: Response, next: NextFunction) {
	const checkAccessToken = req.headers["access"]?.toString()?.split(' ')[1] || ""
	const checkRefreshToken = req.headers["refresh"]?.toString()?.split(' ')[1]

	if(!checkRefreshToken) return res.status(401).json({type: "error", data: {error: "Unauthorized, no token"}})

	try {
		const accessData = jwt.verify(checkAccessToken, process.env.JWT_SECRET!)

		const user = await User.findById((<any>accessData).id)
		if (!user) return res.status(401).json({type: "error", data: {error: "Something wrong"}})
		req.user = user._id

		console.log("yes1")
		next()
	} catch (e) {
		try {
			const refreshData = jwt.verify(checkRefreshToken, process.env.JWT_SECRET!)

			const user = await User.findById((<any>refreshData).id);
			if (!user) return res.status(401).json({type: "error", data: {error: "Something wrong"}})
			req.user = user._id

			req.tokens = genTokens({id: user.id, firstname: user.firstname})

			console.log("yes2")
			next()
		} catch (e) {
			return res.status(401).json({type: "error", data: {error: "Unauthorized, no token"}})
		}
	}
}

