import { Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const newUserSchema = new Schema<IUser>({
  email: {
    type: String,
    required: true,
    trim:true,
  },
  fristName:{

  }
});
