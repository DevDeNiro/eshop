import {Request, Response} from "express";
import {User} from "~/middlewares/models/user.model";

export const getMe = async(req: Request, res: Response) => {
	console.log(req.user)
	const currentUser = await User.findById(req.user)
	if(!currentUser) return res.status(404).json({type: "error", data: {error: "No user found"}})

	if(req.tokens) {
		const tokens = {...req.tokens}
		req.tokens = undefined
		return res.json({type: "success", data: {user: currentUser, tokens}})
	}
	res.json({type: "success", data: {user: currentUser}})
}
