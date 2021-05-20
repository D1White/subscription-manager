import { NextFunction, Request, Response } from 'express'
import { validationResult } from 'express-validator'

import { ImageModel } from '../models/image.model'

import { errorResponse } from '../utils/errorResponse'

class ImageController {
  async find(req: Request, res: Response) {
    try {
      const imageId = req.params.id

      const image = await ImageModel.findById(imageId).exec()

      res.json(image)
    } catch (err) {
      errorResponse(res, err)
    }
  }
  async load(req: Request, res: Response, next: NextFunction): Promise<string> {
    try {
      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        req.body.avatar = null
        return
      }

      const data = {
        name: req.body.name,
        type: req.body.type,
        size: req.body.size,
        base64: req.body.base64,
      }

      const image = await ImageModel.create(data)

      req.body.avatar = image._id
    } catch (err) {
      req.body.avatar = null
    } finally {
      next()
    }
  }
}

export const ImageCtrl = new ImageController()
