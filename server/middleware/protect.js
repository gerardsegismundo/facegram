import jwt from 'jsonwebtoken'
import User from '../models/User.js'

// Protect routes & get user and store at req.user
export const protect = async (req, res, next) => {
  const token = setToken(req.headers)

  if (!token) return res.status(401).send('Not authorized to access this route')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = await User.findById(decoded.id)

    next()
  } catch (error) {
    return res.status(401).send('Not authorized to access this route')
  }
}

// Set token from Bearer token in header
function setToken(requestHeader) {
  const isHeaderPresent = requestHeader.authorization && requestHeader.authorization.startsWith('Bearer')

  return isHeaderPresent ? requestHeader.authorization.split(' ')[1] : null
}
