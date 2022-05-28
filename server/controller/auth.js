import User from '../models/User.js'
import sendTokenResponse from '../utils/sendTokenResponse.js'

// @desc      Get current logged in user
// @route     POST /api/auth/me
// @access    Private
export const getMe = async (req, res) => {
  const user = (await User.findById(req.user.id).select('-password')) || null

  return res.status(200).json({
    success: true,
    data: user
  })
}

// @desc      Logout / clear cookie
// @route     GET /api/auth/logout
// @access    Public
export const logout = async (req, res) => {
  res.cookie('token', 'node', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  })

  return res.status(200).send('User has been logged out.')
}

// @desc      Create user
// @route     POST /api/auth/register
// @access    Public
export const registerUser = async (req, res) => {
  const userExists = await User.findOne({ email: req.body.email })

  if (userExists) {
    return res.status(403).json({
      error: 'Account already exists.'
    })
  }

  try {
    const user = await User.create(req.body)

    sendTokenResponse(user, 200, res)
  } catch (error) {
    res.status(400).json({
      error: error.name === 'ValidationError' ? Object.values(error.errors).map(val => val.message)[0] : error.message
    })
  }
}

// @desc      Login user
// @route     POST /api/auth/login
// @access    Public
export const loginUser = async (req, res) => {
  const { email, password } = req.body

  // Validate email & password
  if (!email || !password) {
    return res.status(400).json({ error: 'Please provide an email and password' })
  }

  try {
    // Check for user
    const user = await User.findOne({ email })

    console.log(user)

    if (!user) {
      return res.status(401).json('Invalid credentials.')
    }

    // Check if password matches
    const isMatch = await user.matchPassword(password)

    if (!isMatch) {
      return res.status(401).json('Invalid credentials.')
    }

    sendTokenResponse(user, 200, res)
  } catch (error) {
    console.log(error)
    res.status(404).send({ error })
  }
}
