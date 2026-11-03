import express from 'express'
import { signIn, signUp, logOut, getCurrentUser } from '../controllers/auth.controller.js'
import { authUser } from "../middlewares/authUser.middleware.js"

const router = express.Router()

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/logout', logOut);
router.get("/me", authUser, getCurrentUser)

export default router