import express from "express"
import 'express-async-errors'
import 'reflect-metadata'
import userRoutes from "./routes/routesUser"
import contactRoutes from "./routes/routesContacts"

const app = express()
app.use(express.json())

app.use('/', userRoutes)
app.use('/contact', contactRoutes)

export default app