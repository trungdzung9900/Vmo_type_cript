"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
const mongoose = require("mongoose");
exports.BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    version: { type: Number, required: true },
    description: { type: String, required: true }
});
const Book = mongoose.model("Book", exports.BookSchema);
exports.default = Book;
