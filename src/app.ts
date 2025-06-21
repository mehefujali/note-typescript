import express, { Application, Request, Response } from "express";
import { model, Schema } from "mongoose";
import { userRouter } from "./app/controllers/user.controller";
import { noteRouter } from "./app/controllers/notes.controller";

const app: Application = express();



//Middle ware

app.use(express.json())


const noteSchema = new Schema({
  title: String,
  content: String,
});

// Routes

//user
app.use('/user' , userRouter)



//note

app.use("/note" , noteRouter)





app.get("/", (req: Request, res: Response) => {
  res.send("this is note app");
});



export default app;
