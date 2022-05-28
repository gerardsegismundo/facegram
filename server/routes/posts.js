import express from 'express'
import { createPost, getTimelinePosts, likePost, updatePost } from '../controller/posts.js'
import { protect } from '../middleware/protect.js'

const router = express.Router()

router.route('/').get(protect, getTimelinePosts).post(protect, createPost)

router.put('/:id', protect, updatePost)

router.put('/like/:id', protect, likePost)

export default router
