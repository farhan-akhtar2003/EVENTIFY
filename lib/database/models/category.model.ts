// MODEL FOR CATEGORIES.
import { Document, Schema, model, models } from "mongoose";

export interface ICategory extends Document {
  // TYPESCRIPT FUNCTION
  _id: string;
  name: string;
}

const CategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
});

const Category = models.Category || model("Category", CategorySchema);

export default Category;
