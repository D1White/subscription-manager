import express from 'express'

import { UserCtrl } from '../controllers/user.controller'

import { userValidation, profitValidation } from '../validations/user.validation'

import { passport } from '../core/passport'

export const usersRouter = express.Router()

usersRouter.get('/me', passport.authenticate('jwt', { session: false }), UserCtrl.me)

usersRouter.patch(
  '/:id',
  userValidation,
  passport.authenticate('jwt', { session: false }),
  UserCtrl.update,
)

usersRouter.patch(
  '/:id/profit',
  profitValidation,
  passport.authenticate('jwt', { session: false }),
  UserCtrl.changeProfit,
)

usersRouter.delete('/:id', passport.authenticate('jwt', { session: false }), UserCtrl.delete)
