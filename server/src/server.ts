import dotenv from 'dotenv'
dotenv.config()

import './core/db'

import express from 'express'
import cors from 'cors'


const app = express()
app.use(cors())
app.use(express.json())


app.listen(process.env.PORT, () => {
  console.log(`SERVER RUNNING at http://localhost:${process.env.PORT}`)
})
