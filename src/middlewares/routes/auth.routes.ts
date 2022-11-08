import {Router} from "express";
import {login, register} from "~/middlewares/controllers/auth.controllers";

const authRoutes = Router()

authRoutes.get("/", (req, res) => {
	res.send("hello from auth")
})
authRoutes.post("/register", register)
authRoutes.post("/login", login)

export default authRoutes
