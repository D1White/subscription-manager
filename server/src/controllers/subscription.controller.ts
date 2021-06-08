import { Response } from 'express'
import { validationResult } from 'express-validator'

import { SubscriptionModel } from '../models/subscription.model'
import { IUserRequest } from './user.controller'

import { isValidObjectId } from '../utils/isValidObjectId'
import { errorResponse } from '../utils/errorResponse'

class SubscriptionController {
  async index(req: IUserRequest, res: Response) {
    try {
      const user = req.user.toJSON()

      const subscr = await SubscriptionModel.find({ user_id: user._id }).exec()

      res.json(subscr)
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async create(req: IUserRequest, res: Response) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
        })
        return
      }

      const user = req.user.toJSON()

      const data = {
        name: req.body.name,
        price: req.body.price,
        payment_day: req.body.payment_day,
        color: req.body.color,
        icon: req.body.icon,
        user_id: user._id,
      }

      const subscr = await SubscriptionModel.create(data)

      res.status(201).json(subscr)
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async update(req: IUserRequest, res: Response) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
        })
        return
      }

      const subscrId = req.params.id
      if (!isValidObjectId(subscrId)) {
        res.status(404).send()
        return
      }

      const user = req.user.toJSON()

      const subscr = await SubscriptionModel.findById(subscrId).exec()
      if (JSON.stringify(subscr.user_id) !== JSON.stringify(user._id)) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      await SubscriptionModel.findByIdAndUpdate(
        subscrId,
        {
          $set: {
            name: req.body.name,
            price: req.body.price,
            payment_day: req.body.payment_day,
            color: req.body.color,
            icon: req.body.icon,
          },
        },
        (err) => {
          if (err) {
            res.status(404).send()
          } else {
            res.status(204).send()
          }
        },
      )
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async delete(req: IUserRequest, res: Response) {
    try {
      const subscrId = req.params.id
      if (!isValidObjectId(subscrId)) {
        res.status(404).send()
        return
      }

      const user = req.user.toJSON()

      const subscr = await SubscriptionModel.findById(subscrId).exec()
      if (JSON.stringify(subscr.user_id) !== JSON.stringify(user._id)) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      await SubscriptionModel.findByIdAndDelete(subscrId, {}, (err) => {
        if (err) {
          res.status(404).send()
        } else {
          res.status(204).send()
        }
      })
    } catch (err) {
      errorResponse(res, err)
    }
  }
}

export const SubscriptionCtrl = new SubscriptionController()
