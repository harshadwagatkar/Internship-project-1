import express from 'express'
import cookieparser from 'cookie-parser'
import cors from 'cors'
import 'dotenv/config'

import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.route.js'

const app = express()

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true 
}))
app.use(cookieparser())


//API's
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

export default app