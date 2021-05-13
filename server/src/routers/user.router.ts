import express from 'express'
import { UserCtrl } from '../controllers/user.controller'
import { userValidation } from '../validations/user.validation'
import { passport } from '../core/passport'

export const usersRouter = express.Router()

usersRouter.get('/', passport.authenticate('jwt', { session: false }), UserCtrl.index)

usersRouter.get('/me', passport.authenticate('jwt', { session: false }), UserCtrl.me)

usersRouter.get('/:id', passport.authenticate('jwt', { session: false }), UserCtrl.show)

usersRouter.post('/', userValidation, UserCtrl.create)

usersRouter.patch(
  '/:id',
  userValidation,
  passport.authenticate('jwt', { session: false }),
  UserCtrl.update,
)

usersRouter.delete('/:id', passport.authenticate('jwt', { session: false }), UserCtrl.delete)
