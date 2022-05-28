import User from '../models/User.js'

// @desc     Get current user
// @route    GET /api/users/:id
// @access   Private
export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)

    return res.status(200).json({
      success: true,
      data: user
    })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

// @desc     Update user
// @route    PUT /api/users/:id
// @access   Private
export const updateUser = async (req, res) => {
  const { userId } = req.body

  if (userId === req.params.id /* || req.user.isAdmin */) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })

      res.status(200).json({
        success: true,
        data: user
      })
    } catch (error) {
      res.status(400).json({
        error: error.name === 'ValidationError' ? Object.values(error.errors).map(val => val.message)[0] : error.message
      })
    }
  } else {
    return res.status(403).json('Invalid credentials')
  }
}

// @desc     Delete user
// @route    DELETE /api/users/:id
// @access   Private
export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)

    return res.status(200).json({
      success: true,
      data: {}
    })
  } catch (error) {
    res.status(400).json({
      error: error.message
    })
  }
}

// @desc     Follow user
// @route    PUT /api/users/follow/:id
// @access   Private
export const followUser = async (req, res) => {
  const currentUserId = req.user.id
  const { id: userToFollowId } = req.params

  if (currentUserId === userToFollowId) {
    return res.status(403).json({ error: 'Following yourself is invalid.' })
  }

  try {
    const userToFollow = await User.findById(userToFollowId)
    const currentUser = await User.findById(currentUserId)

    if (userToFollow.followers.includes(currentUserId)) {
      return res.status(403).json({ error: 'User already followed.' })
    }

    await userToFollow.updateOne({ $push: { followers: currentUserId } })
    await currentUser.updateOne({ $push: { followings: currentUserId } })

    res.status(200).json('User followed.')
  } catch (error) {
    res.status(500).json(error)
  }
}

// @desc     Unfollow user
// @route    PUT /api/users/unfullow/:id
// @access   Private
export const unFollowUser = async (req, res) => {
  const currentUserId = req.user.id
  const { id: userToUnfollowId } = req.params

  if (currentUserId === userToUnfollowId) {
    return res.status(403).json({ error: 'Following yourself is invalid.' })
  }

  try {
    const userToUnfollow = await User.findById(userToUnfollowId)
    const currentUser = await User.findById(currentUserId)

    if (!userToUnfollow.followers.includes(currentUserId)) {
      return res.status(403).json({ error: "User haven't been followed." })
    }

    await userToUnfollow.updateOne({ $pull: { followers: currentUserId } })
    await currentUser.updateOne({ $pull: { followings: currentUserId } })

    res.status(200).json('User unfollowed.')
  } catch (error) {
    res.status(500).json(error)
  }
}
