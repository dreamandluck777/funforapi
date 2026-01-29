import express from 'express'
import { returnTelepusickName } from "../controllers/index.js"
const router = express.Router()

router.post('/telepusik', returnTelepusickName)

export default router