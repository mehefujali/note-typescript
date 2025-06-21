import express, { Request, Response } from "express";
import { User } from "../models/user.model";
import { IUser } from "../interfaces/user.interface";

export const userRouter = express.Router();

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body;
    const newUser = new User(user);
    const hashPassword = await newUser.hashPassword(user.password);

    newUser.password = hashPassword;

    await newUser.save();

    res.status(201).json({
      status: true,
      message: "User created success",
      newUser,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      Error: error,
    });
  }
});
