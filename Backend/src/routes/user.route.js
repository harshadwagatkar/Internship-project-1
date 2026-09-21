import express from "express"
import { authUser } from "../middlewares/authUser.middleware.js"
import { submitFeedback } from "../controllers/user.controller.js"

const router = express.Router()

router.post('/submit-feedback', authUser, submitFeedback)

export default router; 