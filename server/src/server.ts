import dotenv from 'dotenv'
dotenv.config()

import './core/db'

import express from 'express'
import cors from 'cors'

import { passport } from './core/passport'

import { subscriptionRouter, usersRouter, authRouter } from './routers'

const app = express()
app.use(cors())
app.use(express.json())
app.use(passport.initialize())

app.use('/api/subscriptions', subscriptionRouter)
app.use('/api/users', usersRouter)
app.use('/api', authRouter)

app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`)
})
