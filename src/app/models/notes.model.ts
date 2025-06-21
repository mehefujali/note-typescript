import mongoose, { mongo, Schema } from "mongoose";
import { Note } from "../interfaces/note.interface";

const notSchema = new Schema<Note>({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: [10, "Title length shuld be minimum 10 "],
  },
  headline: {
    type: String,
    required: true,
    trim: true,
    minlength: [30, "Headline length shuld be minimum 30"],
  },
  description: {
    type: String,
    required: false,
  },
  user:{
    type:Schema.Types.ObjectId ,
    ref:"User",
    required:true

  }
});
