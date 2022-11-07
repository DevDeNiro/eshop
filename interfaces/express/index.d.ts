import {Types} from "mongoose";
// to make the file a module and avoid the TypeScript error
export {}

declare global {
	namespace Express {
		interface Request {
			tokens?: {
				accessToken: string,
				refreshToken: string
			},
			user?: Types.ObjectId
		}
	}
}
