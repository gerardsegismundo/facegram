import express from 'express'
import { loginUser, registerUser, getMe, logout } from './../controller/auth.js'
import { protect } from './../middleware/protect.js'

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logout)
router.get('/me', protect, getMe)

export default router
