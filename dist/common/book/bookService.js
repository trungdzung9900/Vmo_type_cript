"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookCollections_1 = require("./bookCollections");
class BookService {
    createBook(book_params, callback) {
        const _session = new bookCollections_1.default(book_params);
        _session.save(callback);
    }
    allBook(callback) {
        bookCollections_1.default.find(callback);
    }
    filterBook(query, callback) {
        bookCollections_1.default.findOne(query, callback);
    }
    updateBook(book_params, callback) {
        const query = { _id: book_params._id };
        bookCollections_1.default.findOneAndUpdate(query, book_params, callback);
    }
    deleteBook(_id, callback) {
        const query = { _id };
        bookCollections_1.default.deleteOne(query, callback);
    }
    pagingBook(limit, page, callback) {
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        bookCollections_1.default.find().skip(startIndex).limit(endIndex);
    }
}
exports.default = BookService;
