import {Router} from "express";
import {register} from "~/middlewares/controllers/auth.controllers";

const authRoutes = Router()

authRoutes.post("/register", register)

export default authRoutes
