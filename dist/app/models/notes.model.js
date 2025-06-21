"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
const mongoose_1 = require("mongoose");
const notSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: [10, "Title length shuld be minimum 10 "],
    },
    headline: {
        type: String,
        required: true,
        trim: true,
        minlength: [30, "Headline length shuld be minimum 30"],
    },
    description: {
        type: String,
        required: false,
    },
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    color: {
        type: String,
        default: "gray"
    }
});
exports.Note = (0, mongoose_1.model)("Note", notSchema);
