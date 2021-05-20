import { model, Schema, Document, Model } from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  password: string
  avatar?: string
}

const UserSchema: Schema = new Schema({
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
    ref: 'Image',
    type: Schema.Types.ObjectId,
  },
})

UserSchema.set('toJSON', {
  transform(_, obj) {
    delete obj.password
    return obj
  },
})

export const UserModel: Model<IUser> = model('User', UserSchema)
