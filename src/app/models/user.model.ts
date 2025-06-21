import { Model, model, Schema } from "mongoose";
import {
  IAddress,
  IUser,
  UserInstanceMethod,
} from "../interfaces/user.interface";
import bcrypt from "bcrypt";
const newAdressSchema = new Schema<IAddress>(
  {
    city: { type: String },
    country: { type: String },
    pincode: { type: Number },
  },
  {
    _id: false,
  }
);

const newUserSchema = new Schema<IUser, Model<IUser>, UserInstanceMethod>(
  {
    fristName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique:true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
      required: true,
    },
    address: newAdressSchema,
  },
  {
    timestamps: {
      createdAt: true,
      updatedAt: true,
    },
  }
);

newUserSchema.method("hashPassword", async function (password: string) {
  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
});

export const User = model("User", newUserSchema);
