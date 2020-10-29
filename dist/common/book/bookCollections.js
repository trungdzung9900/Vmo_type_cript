"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    version: { type: Number, required: true },
    description: { type: String, required: true }
});
const Book = mongoose.model("Book", BookSchema);
exports.default = Book;
