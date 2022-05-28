import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import helmet from 'helmet'
import morgan from 'morgan'
import userRoute from './routes/users.js'
import authRoute from './routes/auth.js'
import postsRoute from './routes/posts.js'

dotenv.config()

const app = express()

mongoose.connect(process.env.MONGO_URL, () => {
  console.log(`Connected to MongoDB.`)
})

// Middleware
app.use(express.json())
app.use(helmet())
app.use(morgan('common'))

// Routes
app.use('/api/users', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/posts', postsRoute)

const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
})

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`)

  // Close server & exit process
  server.close(() => process.exit(1))
})
