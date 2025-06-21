"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = require("mongoose");
const app = (0, express_1.default)();
const noteSchema = new mongoose_1.Schema({
    title: String,
    content: String,
});
const Note = (0, mongoose_1.model)("Note", noteSchema);
app.post("/create-note", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const myNote = new Note({
        title: "this is note",
        content: "hello this is content",
    });
    yield myNote.save();
    res.status(201).send({
        status: true,
        message: "New note created",
        myNote,
    });
}));
app.get("/", (req, res) => {
    res.send("this is note app");
});
app.get("/web", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch('https://www.startech.com.bd/laptop-notebook');
        const html = yield response.text();
        res.send(html);
    }
    catch (error) {
        res.status(500).send("Something went wrong.");
    }
}));
exports.default = app;
