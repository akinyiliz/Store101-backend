import { timeStamp } from "console";
import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rate: { type: Number, required: true },
    reviews: { type: Number, required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("products", productSchema);

export default Product;
