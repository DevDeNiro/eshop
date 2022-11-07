import {Router} from "express";
import {login, register} from "~/middlewares/controllers/auth.controllers";

const authRoutes = Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)

export default authRoutes
