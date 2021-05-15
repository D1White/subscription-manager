import express from 'express'
import { userValidation } from '../validations/user.validation'
import { UserCtrl } from '../controllers/user.controller'
import { passport } from '../core/passport'

export const authRouter = express.Router()

authRouter.post('/register', userValidation, UserCtrl.create)
authRouter.post('/login', passport.authenticate('local'), UserCtrl.afterLogin)
