import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  username: {
    required: true,
    unique: true,
    type: String,
  },
  email: {
    required: true,
    unique: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  avatar: {
    type: String,
  },
})

UserSchema.set('toJSON', {
  transform(_, obj) {
    delete obj.password
    return obj
  },
})

export const UserModel = model('User', UserSchema)
