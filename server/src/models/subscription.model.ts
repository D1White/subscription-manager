import { model, Schema, Document, Model } from 'mongoose'

export interface ISubscription extends Document {
  name: string
  price: number
  payment_day: number
  color?: string
  icon?: string
  user_id: string
}

const SubscriptionSchema: Schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  price: {
    require: true,
    type: Number,
  },
  payment_day: {
    require: true,
    type: Number,
  },
  color: {
    type: String,
  },
  icon: {
    ref: 'Image',
    type: Schema.Types.ObjectId,
  },
  user_id: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
})

export const SubscriptionModel: Model<ISubscription> = model('Subscription', SubscriptionSchema)
