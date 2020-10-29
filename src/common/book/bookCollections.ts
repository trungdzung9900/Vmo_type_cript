import * as mongoose from "mongoose";

export interface IBook extends mongoose.Document {
  title: string;
  author: string;
  version: number;
  description: string;
}
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  version: { type: Number, required: true },
  description: { type: String, required: true }
});

const Book = mongoose.model<IBook>("Book", BookSchema);
export default Book;