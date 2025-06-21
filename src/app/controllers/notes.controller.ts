import express, { Request, Response } from "express";
import { Note } from "../models/notes.model";

export const noteRouter = express.Router();

noteRouter.post("/", async (req: Request, res: Response) => {
  try {
    const noteBody = req.body;
    const newNote = await Note.create(noteBody);
    res.status(201).json({
      status: true,
      message: "Note created success",
      newNote,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      Error: error,
    });
  }
});

noteRouter.get("/", async (req: Request, res: Response) => {
  try {
    const note = await Note.find().populate("user");
    res.status(200).json({
      status: true,
      message: "Note fetch success",
      note,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      Error: error,
    });
  }
});
