"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addBook = exports.updateBook = exports.deleteBook = exports.getBook = exports.allBooks = void 0;
const book_1 = require("./book");
exports.allBooks = (req, res) => {
    let books = book_1.default.find((err, books) => {
        if (err) {
            res.send("Error!");
        }
        else {
            res.send(books);
        }
    });
};
exports.getBook = (req, res) => {
    let book = book_1.default.findById(req.params.id, (err, book) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
exports.deleteBook = (req, res) => {
    let book = book_1.default.deleteOne({ _id: req.params.id }, (err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send("Successfully Deleted Book");
        }
    });
};
exports.updateBook = (req, res) => {
    let book = book_1.default.findByIdAndUpdate(req.params.id, req.body, (err, book) => {
        try {
            res.send({
                message: "Successfully updated book!",
                data: book
            });
        }
        catch (err) {
            res.send(err);
        }
    });
};
exports.addBook = (req, res) => {
    var book = new book_1.default(req.body);
    book.save((err) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(book);
        }
    });
};
