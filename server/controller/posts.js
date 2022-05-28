import Post from '../models/Post.js'
import User from '../models/User.js'

// @desc      Create Post
// @route     POST /api/posts
// @access    Private
export const createPost = async (req, res) => {
  // Add user to req.body
  req.body.userId = req.user.id

  try {
    const post = await Post.create(req.body)

    return res.status(200).json({
      sucess: true,
      data: post
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

// @desc      Update Post
// @route     PUT /api/posts/:id
// @access    Private
export const updatePost = async (req, res) => {
  try {
    let post = await Post.findById(req.params.id)

    if (!post) return res.status(404).send(`Post not found with the id of ${req.params.id}.`)

    // Make sure if it's the owner
    if (post.userId.toString() !== req.user.id) {
      return res.status(401).send(`User ${req.params.id} is not authorized to delete this post.`)
    }
    post = await Post.findOneAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

    return res.status(200).json({
      success: true,
      data: post
    })
  } catch (error) {
    res.status(500).json(error)
  }
}

// @desc      Like or Dislike Post
// @route     PUT /api/posts/like/:id
// @access    Private
export const likePost = async (req, res) => {
  const postId = req.params.id
  const userId = req.user.id

  try {
    const post = await Post.findById(postId)

    // Like post
    if (!post.likes.includes(userId)) {
      await post.updateOne({ $push: { likes: userId } })
      return res.status(200).send('Post has been liked.')
    }
    // dislike post
    else {
      await post.updateOne({ $pull: { likes: userId } })
      res.status(200).send('Post has been disliked.')
    }
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getTimelinePosts = async (req, res) => {
  const currentUserId = req.user.id

  try {
    const { followings } = await User.findById(currentUserId)
    const userPosts = await Post.find({ userId: currentUserId })

    const friendPosts = await Promise.all(
      followings.map(followingId => {
        Post.find({ userId: followingId })
      })
    )

    const timelinePosts = { ...userPosts, ...friendPosts }

    return res.status(200).json({ success: true, data: timelinePosts })
  } catch (error) {
    res.status(400).json(error)
  }
}
