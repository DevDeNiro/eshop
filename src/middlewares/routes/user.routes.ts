import {Router} from "express";
import {deleteUser, getUser, updateUser} from "~/middlewares/controllers/user.controllers";
import {verifyTokens} from "~/services/jwt.services";

const userRoutes = Router()

userRoutes.get("/", verifyTokens, getUser)
userRoutes.put("/", verifyTokens, updateUser)
userRoutes.delete("/", verifyTokens, deleteUser)

export default userRoutes
