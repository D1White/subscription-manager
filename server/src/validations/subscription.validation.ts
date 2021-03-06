import { body } from 'express-validator'

export const subscriptionValidation = [
  body('name', 'Enter subscription name')
    .isString()
    .isLength({
      min: 3,
      max: 20,
    })
    .withMessage('The allowed number of characters in a name is from 3 to 20'),
  body('price', 'Enter price').isFloat({ min: 0 }).withMessage('Not correct price'),
  body('payment_day', 'Enter payment day')
    .isInt({ min: 1, max: 31 })
    .withMessage('The allowed payment day is from 1 to 31'),
  body('color', 'Enter HEX color').isHexColor().withMessage('Not correct HEX color'),
]
