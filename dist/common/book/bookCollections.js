"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const model_1 = require("../../module/model");
const BookSchema = new mongoose.Schema({
    bookID: {
        type: String,
        required: true,
        unique: true,
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    version: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    modification_notes: [model_1.ModificationNote]
});
const Book = mongoose.model("Book", BookSchema);
exports.default = Book;
