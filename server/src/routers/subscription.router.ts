import express from 'express'
import { SubscriptionCtrl } from '../controllers/subscription.controller'
import { subscriptionValidation } from '../validations/subscription.validation'
import { passport } from '../core/passport'

export const subscriptionRouter = express.Router()

subscriptionRouter.get(
  '/',
  passport.authenticate('jwt', { session: false }),
  SubscriptionCtrl.index,
)

subscriptionRouter.post(
  '/',
  subscriptionValidation,
  passport.authenticate('jwt', { session: false }),
  SubscriptionCtrl.create,
)

subscriptionRouter.patch(
  '/:id',
  subscriptionValidation,
  passport.authenticate('jwt', { session: false }),
  SubscriptionCtrl.update,
)

subscriptionRouter.delete(
  '/:id',
  passport.authenticate('jwt', { session: false }),
  SubscriptionCtrl.delete,
)
