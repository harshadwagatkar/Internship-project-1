import express from 'express'
import cookieparser from 'cookie-parser'

const app = express()

app.use(express.json())
app.use(cors({
    origin : 'http://localhost:5173',
    Credential : true
}))
app.use(cookieparser())

//API's

export default app