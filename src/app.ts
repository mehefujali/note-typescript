import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";

const app: Application = express();

const noteSchema = new Schema({
  title: String,
  content: String,
});

const Note = model("Note", noteSchema);
app.post("/create-note", async (req: Request, res: Response) => {
  const myNote = new Note({
    title: "this is note",
    content: "hello this is content",
  });
  await myNote.save();
  res.status(201).send({
    status: true,
    message: "New note created",
    myNote,
  });
});

app.get("/", (req: Request, res: Response) => {
  res.send("this is note app");
});

app.get("/web", async (req, res) => {
  try {
    const response = await fetch('https://www.startech.com.bd/laptop-notebook');
    const html = await response.text(); 
    res.send(html); 
  } catch (error) {
    res.status(500).send("Something went wrong.");
  }
});

export default app;
