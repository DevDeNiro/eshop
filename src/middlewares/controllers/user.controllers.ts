import {Request, Response} from "express";
import {User} from "~/middlewares/models/user.model";


/**
 * @description return logged user and tokens if refresh still valid
 * @param req
 * @param res
 * @access Private
 */
export const getUser = async(req: Request, res: Response) => {
	console.log(req.user)
	const currentUser = await User.findById(req.user).select('-password')
	if(!currentUser) return res.status(404).json({type: "error", data: {error: "No user found"}})

	if(req.tokens) {
		const tokens = {...req.tokens}
		req.tokens = undefined
		return res.status(200).json({type: "success", data: {user: currentUser, tokens}})
	}
	res.status(200).json({type: "success", data: {user: currentUser}})
}

/**
 * @description update logged user
 * @param req
 * @param res
 * @access Private
 */
export const updateUser = async(req: Request, res: Response) => {
	try {
		const currentUser = await User.findByIdAndUpdate(req.user, req.body, {
			upsert: true,
			new: true
		}).select('-password')
		res.status(200).json({type: "success", data: {user: currentUser}})

	} catch (err) {
		return res.status(500).json({type: "error", data: {error: err}});
	}
}

/**
 * @description delete logged user
 * @param req
 * @param res
 * @access Private
 */
export const deleteUser = async(req: Request, res: Response) => {
	try {
		const currentUser = await User.findByIdAndDelete(req.user)
		if(currentUser) {
			res.status(204).json({})
		}
	} catch (err) {
		return res.status(500).json({type: "error", data: {error: err}});
	}
}
