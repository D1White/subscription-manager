import express from 'express'
import { imageValidation } from '../validations/image.validation'
import { ImageCtrl } from '../controllers/image.controller'

export const imageRouter = express.Router()

imageRouter.get('/:id', imageValidation, ImageCtrl.find)
