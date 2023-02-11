import express from 'express'
import cors from 'cors'
import connectDB from './config/db.connection.js'
import usersRouter from './routes/user.Route.js'
import todosRouter from './routes/todo.Route.js'
import authRouter from './routes/auth.routes.js'

const PORT = 3001

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(todosRouter)
app.use(usersRouter)
app.use(authRouter)


app.listen (PORT, () => console.log ('Server listening on port', PORT))