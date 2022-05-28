import express from 'express'
import { getUser, followUser, updateUser, deleteUser, unFollowUser } from '../controller/users.js'
import { protect } from '../middleware/protect.js'

const router = express.Router()

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

router.put('/follow/:id', protect, followUser)

router.put('/unfollow/:id', protect, unFollowUser)

export default router
