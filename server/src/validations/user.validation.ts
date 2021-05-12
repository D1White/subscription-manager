import { body } from 'express-validator'

export const userValidation = [
  body('username', 'Enter username')
    .isString()
    .isLength({
      min: 3,
      max: 20,
    })
    .withMessage('The allowed number of characters in a username is from 3 to 20'),
  body('email', 'Enter email')
    .isEmail()
    .isLength({
      min: 3,
      max: 50,
    })
    .withMessage('The allowed number of characters in an email is from 3 to 50'),
  body('password', 'Enter password')
    .isString()
    .isLength({
      min: 3,
      max: 50,
    })
    .withMessage('The allowed number of characters in a password is from 3 to 50'),
  body('avatar', 'Enter user avatar').isString().withMessage('Not correct avatar'),
]