import * as mongoose from "mongoose";
import { ModificationNote } from "../../module/model";
export interface IBook {
  _id?: string;
  bookID: string;
  title: string;
  author: string;
  version: number;
  description: string;
  modification_notes: ModificationNote[]
}
const BookSchema = new mongoose.Schema({
  bookID: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  version: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  modification_notes: [ModificationNote]
});

const Book = mongoose.model("Book", BookSchema);
export default Book;