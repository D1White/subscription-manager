import { Response } from 'express'

export const errorResponse = (res: Response, error: any) => {
  res.status(500).json({
    message: error,
  })
}
