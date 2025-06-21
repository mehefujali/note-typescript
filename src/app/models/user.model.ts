import { model, Schema } from "mongoose";
import { IAddress, IUser } from "../interfaces/user.interface";

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

const newUserSchema = new Schema<IUser>(
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

export const User = model("User", newUserSchema);
