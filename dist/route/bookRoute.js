"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookInfo = void 0;
const authorController_1 = require("../common/author/authorController");
class BookInfo {
    constructor() {
        this.user_controller = new authorController_1.UserController();
    }
    route(app) {
        app.get('/books', bookController.allBooks);
        app.get('/api/user/:id', (req, res) => {
            this.user_controller.get_user(req, res);
        });
        app.put('/api/user/:id', (req, res) => {
            this.user_controller.update_user(req, res);
        });
        app.delete('/api/user/:id', (req, res) => {
            this.user_controller.delete_user(req, res);
        });
    }
}
exports.BookInfo = BookInfo;
app.get('/books', bookController.allBooks);
app.get('/book/:id', bookController.getBook);
app.post('/book', bookController.addBook);
app.delete('/book/:id', bookController.deleteBook);
app.put('/book/:id', bookController.updateBook);
