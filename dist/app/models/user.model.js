"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const newAdressSchema = new mongoose_1.Schema({
    city: { type: String },
    country: { type: String },
    pincode: { type: Number },
}, {
    _id: false,
});
const newUserSchema = new mongoose_1.Schema({
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
}, {
    timestamps: {
        createdAt: true,
        updatedAt: true,
    },
});
exports.User = (0, mongoose_1.model)("User", newUserSchema);
