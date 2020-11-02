"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const service_1 = require("../../module/service");
const bookService_1 = require("./bookService");
class BookController {
    constructor() {
        this.book_service = new bookService_1.default();
    }
    create_book(req, res) {
        if (req.body.bookID && req.body.title && req.body.author
            && req.body.version && req.body.description) {
            const book_params = {
                bookID: req.body.bookID,
                title: req.body.title,
                author: req.body.author,
                version: req.body.version,
                description: req.body.description,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: 'New book created'
                    }]
            };
            this.book_service.createBook(book_params, (err, book_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('create book successfull', book_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    ;
    get_book(req, res) {
        if (req.params.id) {
            const book_filter = { _id: req.params.id };
            this.book_service.filterBook(book_filter, (err, book_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('get book successfull', book_data, res);
                }
            });
        }
    }
    get_all_book(req, res) {
        this.book_service.allBook((err, book_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('get book successfull', book_data, res);
            }
        });
    }
    paging_book(req, res) {
        const limit = parseInt(req.params.limit);
        const page = parseInt(req.params.number);
        this.book_service.pagingBook(limit, page, (err, book_data) => {
            if (err) {
                service_1.mongoError(err, res);
            }
            else {
                service_1.successResponse('get book successfull', book_data, res);
            }
        });
    }
    update_book(req, res) {
        if (req.params.id && req.body.bookID || req.body.id || req.body.title || req.body.author || req.body.version || req.body.description) {
            const book_filter = { _id: req.params.id };
            this.book_service.filterBook(book_filter, (err, book_data) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (book_data) {
                    book_data.modification_notes.push({
                        modified_on: new Date(Date.now()),
                        modified_by: null,
                        modification_note: "Book data updated"
                    });
                    const data_params = {
                        _id: req.params.id,
                        bookID: req.body.bookID,
                        title: req.body.title ? req.body.title : book_data.title,
                        author: req.body.author ? req.body.author : book_data.author,
                        version: req.body.version ? req.body.version : book_data.version,
                        description: req.body.description ? req.body.description : book_data.description,
                        modification_notes: book_data.modification_notes
                    };
                    this.book_service.updateBook(data_params, (err) => {
                        if (err) {
                            service_1.mongoError(err, res);
                        }
                        else {
                            service_1.successResponse('update book successfull', null, res);
                        }
                    });
                }
                else {
                    service_1.failureResponse('invalid book', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
    delete_book(req, res) {
        if (req.params.id) {
            this.book_service.deleteBook(req.params.id, (err, delete_detail) => {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_detail.deletedCount !== 0) {
                    service_1.successResponse('delete user succesfull', null, res);
                }
                else {
                    service_1.failureResponse('invalid book', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    }
}
exports.BookController = BookController;
// export let allBooks = (req: Request, res: Response) => {
//   let books = Book.find((err: any, books: any) => {
//     if (err) {
//       res.send("Error!");
//     } else {
//       res.send(books);
//     }
//   });
// };
// export let getBook = (req: Request, res: Response) => {
//   let book = Book.findById(req.params.id, (err: any, book: any) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(book);
//     }
//   });
// };
// export let deleteBook = (req: Request, res: Response) => {
//   let book = Book.deleteOne({ _id: req.params.id }, (err: any) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send("Successfully Deleted Book");
//     }
//   });
// };
// export let updateBook = (req: Request, res: Response) => {
//   let book = Book.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     (err: any, book: any) => {
//       try {
//         res.send({
//           message:"Successfully updated book!",
//           data: book
//         });
//       } 
//       catch(err)
//       {
//         res.send(err)
//       }
//     }
//   );
// };
// export let addBook = (req: Request, res: Response) => {
//   var book = new Book(req.body);
//   book.save((err: any) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send(book);
//     }
//   });
// };
// }
