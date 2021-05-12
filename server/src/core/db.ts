import mongoose from 'mongoose'

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log('Connected to DB')
  }
)

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

export { db }
