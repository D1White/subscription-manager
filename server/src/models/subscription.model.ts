import { model, Schema } from 'mongoose'

const SubscriptionSchema = new Schema({
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
    type: String,
  },
  user_id: {
    required: true,
    ref: 'User',
    type: Schema.Types.ObjectId,
  },
})

export const SubscriptionModel = model('Subscription', SubscriptionSchema)
