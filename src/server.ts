import {Server} from 'http'
import app from './app';
import mongoose from 'mongoose';

let server:Server
const PORT = 5000
async function main(){
  try {
     await mongoose.connect('mongodb://127.0.0.1:27017/note-app')
     console.log("MONGO DB CONNECTED")
     server = app.listen(PORT, ()=>{
      console.log("SERVER IS RUNNING ON" , PORT)
     })
  } catch (error) {
    console.error("An error occurred:", error);
  }
}


main()