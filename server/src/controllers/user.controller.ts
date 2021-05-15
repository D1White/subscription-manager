import jwt from 'jsonwebtoken'
import { Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { UserModel, IUser } from '../models/user.model'
import { SubscriptionModel } from '../models/subscription.model'

import { isValidObjectId } from '../utils/isValidObjectId'
import { generateMD5 } from '../utils/generateHash'
import { errorResponse } from '../utils/errorResponse'

export interface IUserRequest extends Request {
  user: IUser
}

class UserController {
  async me(req: IUserRequest, res: Response) {
    try {
      const user = req.user ? req.user.toJSON() : undefined
      const subscr = await SubscriptionModel.find({ user_id: req.user._id })
        .select('-user_id -__v')
        .exec()

      res.json({
        ...user,
        subscr,
      })
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async create(req: Request, res: Response) {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        res.status(400).json({
          errors: errors.array(),
        })
        return
      }

      const data = {
        username: req.body.username,
        email: req.body.email,
        password: generateMD5(req.body.password + process.env.SECRET_KEY),
        avatar: req.body.avatar,
      }

      const user = await UserModel.create(data)

      res.status(201).json(user)
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async afterLogin(req: IUserRequest, res: Response) {
    try {
      const user = req.user ? req.user.toJSON() : undefined
      res.json({
        ...user,
        token: jwt.sign({ data: req.user }, process.env.SECRET_KEY, {
          expiresIn: '30d',
        }),
      })
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

      const userId = req.params.id
      if (!isValidObjectId(userId)) {
        res.status(404).send()
        return
      }

      const headerUser = req.user.toJSON()
      if (JSON.stringify(userId) !== JSON.stringify(headerUser._id)) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      const user = await UserModel.findByIdAndUpdate(
        userId,
        {
          $set: {
            username: req.body.username,
            email: req.body.email,
            avatar: req.body.avatar,
          },
        },
        { new: true },
      ).exec()

      res.json(user)
    } catch (err) {
      errorResponse(res, err)
    }
  }

  async delete(req: IUserRequest, res: Response) {
    try {
      const userId = req.params.id
      if (!isValidObjectId(userId)) {
        res.status(404).send()
        return
      }

      const headerUser = req.user.toJSON()
      if (userId !== JSON.stringify(headerUser._id)) {
        res.status(401).json({
          message: 'Not enough rights!',
        })
        return
      }

      await UserModel.findByIdAndDelete(userId, {}, (err) => {
        if (err) {
          res.status(404).send()
        } else {
          res.status(204).send()
        }
      })

      await SubscriptionModel.deleteMany({ user_id: userId })
    } catch (err) {
      errorResponse(res, err)
    }
  }
}

export const UserCtrl = new UserController()
