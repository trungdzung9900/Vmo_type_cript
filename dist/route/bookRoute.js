"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const bookController_1 = require("../common/book/bookController");
class BookRoute {
    constructor() {
        this.book_controller = new bookController_1.BookController();
    }
    route(app) {
        app.get('/book/:id', (req, res) => {
            this.book_controller.get_book(req, res);
        });
        app.get('/books/', (req, res) => {
            this.book_controller.get_all_book(req, res);
        });
        app.get('/book/', (req, res) => {
            this.book_controller.paging_book(req, res);
        });
        app.post('/book/', (req, res) => {
            this.book_controller.create_book(req, res);
        });
        app.put('/book/:id', (req, res) => {
            this.book_controller.update_book(req, res);
        });
        app.delete('/book/:id', (req, res) => {
            this.book_controller.delete_book(req, res);
        });
    }
}
exports.BookRoute = BookRoute;
