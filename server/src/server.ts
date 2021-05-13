import dotenv from 'dotenv'
dotenv.config()

import './core/db'

import express from 'express'
import cors from 'cors'

import { passport } from './core/passport'

import { subscriptionRouter } from './routers/subscription.router'
import { usersRouter } from './routers/user.router'

const app = express()
app.use(cors())
app.use(express.json())
app.use(passport.initialize())

app.use('/api/subscriptions', subscriptionRouter)
app.use('/api/user', usersRouter)

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`)
})
