// Get token from model, store token to cookie
function sendTokenResponse(user, statusCode, res) {
  // Create token
  const token = user.getSignedJwtToken()

  const cookieOptions = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }

  return res.status(statusCode).cookie('token', token, cookieOptions).json({
    success: true,
    token
  })
}

export default sendTokenResponse
