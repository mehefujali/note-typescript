import { Schema } from "mongoose";

export interface Note {
  title:string ,
  headline:string,
  description:string ,
  user:Schema.Types.ObjectId ,
  color:string

}