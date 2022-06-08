import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces/Product';

const paintSchema = new Schema({
  name: { type: String},
  brand: { type: String},
  image: [{ type: String}],
  description: { type: String},
  line: { type: String},
  category: { type: String},
  inStock: { type: Number},
  price: { type: Number},
  olPrice: { type: Number},
  tags: [{ type: String}],
  site: { type: String},
  slug: { type: String},
  status: { type: Boolean},
})

const Paint:Model<IProduct> = mongoose.models.Paint || model('Paint',paintSchema);

export default Paint;

