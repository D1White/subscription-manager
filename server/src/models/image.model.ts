import { model, Schema, Document, Model } from 'mongoose'

interface IImage extends Document {
  name: string
  type?: string
  size: number
  base64: Buffer
}

const ImageSchema: Schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  type: {
    type: String,
  },
  size: {
    required: true,
    type: Number,
  },
  base64: {
    required: true,
    type: Buffer,
  },
})

export const ImageModel: Model<IImage> = model('Image', ImageSchema)
