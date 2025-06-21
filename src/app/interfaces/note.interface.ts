import { Schema } from "mongoose";

export interface INote {
  title:string ,
  headline:string,
  description:string ,
  user:Schema.Types.ObjectId ,
  color:string

}