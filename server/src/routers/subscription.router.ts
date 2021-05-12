import express from 'express'
import { SubscriptionCtrl } from '../controllers/subscription.controller'
import { subscriptionValidation } from '../validations/subscription.validation'

export const subscriptionRouter = express.Router()

subscriptionRouter.get('/', SubscriptionCtrl.index)

subscriptionRouter.post('/', subscriptionValidation, SubscriptionCtrl.create)

subscriptionRouter.patch('/:id', subscriptionValidation, SubscriptionCtrl.update)

subscriptionRouter.delete('/:id', SubscriptionCtrl.delete)
