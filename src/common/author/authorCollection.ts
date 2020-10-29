import { ModificationNote } from "../../module/model";
import * as mongoose from 'mongoose';

export interface IUser {
    _id?: string;
    name: {
        first_name: string;
        middle_name: string;
        last_name: string;
    };
    email: string;
    phone_number: string;
    gender: string  ;
    is_deleted?: string;
    modification_notes: ModificationNote[]
}

const Schema = mongoose.Schema;

const schema = new Schema({
  name: {
    type: {
      first_name: String,
      middle_name: String,
      last_name: String
    }
  },
  email: String,
  phone_number: String,
  gender: String,
  is_deleted: {
    type: Boolean,
    default: false
  },
  modification_notes: [ModificationNote]
});

export default mongoose.model('users', schema);