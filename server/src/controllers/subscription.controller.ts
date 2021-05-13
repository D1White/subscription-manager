import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { SubscriptionModel } from '../models/subscription.model'
import { IUserRequest } from './user.controller'

import { isValidObjectId } from '../utils/isValidObjectId'
import { errorResponse } from '../utils/errorResponse'

class SubscriptionController {
  async index(_, res: Response) {
    try {
      const subscr = await SubscriptionModel.find({}).exec()

      res.json({
        data: subscr,
      })
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

      const data = {
        name: req.body.name,
        price: req.body.price,
        payment_day: req.body.payment_day,
        color: req.body.color,
        icon: req.body.icon,
        user_id: req.user._id,
      }

      const subscr = await SubscriptionModel.create(data)

      res.status(201).json(subscr)
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async update(req: Request, res: Response) {
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

      const subscr = await SubscriptionModel.updateOne(
        { _id: subscrId },
        {
          $set: {
            name: req.body.name,
            price: req.body.price,
            payment_day: req.body.payment_day,
            color: req.body.color,
            icon: req.body.icon,
          },
        },
      )

      res.json(subscr)
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const subscrId = req.params.id
      if (!isValidObjectId(subscrId)) {
        res.status(404).send()
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
