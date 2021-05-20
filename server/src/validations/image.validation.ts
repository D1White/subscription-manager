import { body } from 'express-validator'

export const imageValidation = [
  body('name', 'Enter image name')
    .isString()
    .isLength({
      min: 5,
      max: 30,
    })
    .withMessage('The allowed number of characters in a name is from 5 to 30'),
  body('type', 'Enter image type')
    .optional()
    .isString()
    .isLength({
      min: 6,
      max: 13,
    })
    .withMessage('The allowed number of characters in a type is from 6 to 13'),
  body('size', 'Enter image size in KB')
    .isInt({ min: 1, max: 16385 })
    .withMessage('Maximum image size 16 MB (16384 KB)'),
  body('base64', 'Enter image base64').isString().withMessage('Incorrect data'),
]
