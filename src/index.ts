import cors from "cors"
import express from "express"
import {config} from "dotenv"
import connect from "~/db/connection"
import authRoutes from "~/middlewares/routes/auth.routes"
import userRoutes from "~/middlewares/routes/user.routes";
config()

const uri: string = process.env.DB_URI!
const port = process.env.API_PORT || 4000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.use("/auth", authRoutes)
app.use("/user", userRoutes)

app.listen(port, () => {
	console.log('Silence, ça tourne.')
	connect(uri)
})
