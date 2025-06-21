"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const user_controller_1 = require("./app/controllers/user.controller");
const notes_controller_1 = require("./app/controllers/notes.controller");
const app = (0, express_1.default)();
//Middle ware
app.use(express_1.default.json());
const noteSchema = new mongoose_1.Schema({
    title: String,
    content: String,
});
// Routes
//user
app.use('/user', user_controller_1.userRouter);
//note
app.use("/note", notes_controller_1.noteRouter);
app.get("/", (req, res) => {
    res.send("this is note app");
});
exports.default = app;
