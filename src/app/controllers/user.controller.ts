import express, { Request, Response } from "express";
import { User } from "../models/user.model";

const userRouter = express.Router();

userRouter.post("/", async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const newUser = await User.create(user);
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
