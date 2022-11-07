import {Router} from "express";
import {getMe} from "~/middlewares/controllers/user.controllers";
import {verifyTokens} from "~/services/jwt.services";

const userRoutes = Router()

userRoutes.get("/", verifyTokens, getMe)

export default userRoutes
