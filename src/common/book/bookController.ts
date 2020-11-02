import { Request, Response } from "express";
import { insufficientParameters, mongoError, successResponse, failureResponse } from '../../module/service';
import { IBook } from './bookCollections';
import BookService from './bookService'
export class BookController {
  private book_service: BookService = new BookService();

  public create_book(req: Request, res: Response) {
    if (req.body.bookID && req.body.title && req.body.author
      && req.body.version && req.body.description) {
      const book_params: IBook = {
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
      this.book_service.createBook(book_params, (err: any, book_data: IBook) => {
        if (err) {
          mongoError(err, res);
        } else {
          successResponse('create book successfull', book_data, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  };
  public get_book(req: Request, res: Response) {
    if (req.params.id) {
      const book_filter = { _id: req.params.id };
      this.book_service.filterBook(book_filter, (err: any, book_data: IBook) => {
        if (err) {
          mongoError(err, res)
        }
        else {
          successResponse('get book successfull', book_data, res);
        }
      })
    }
  }
  public get_all_book(req: Request, res: Response) {
    this.book_service.allBook((err: any, book_data: IBook) => {
      if (err) {
        mongoError(err, res)
      }
      else {
        successResponse('get book successfull', book_data, res);
      }
    })
  }
  public paging_book(req: Request, res: Response) {
    const limit = parseInt(req.params.limit)
    const page = parseInt(req.params.number)
    this.book_service.pagingBook(limit, page, (err: any, book_data: IBook) => {
      if (err) {
        mongoError(err, res)
      }
      else {
        successResponse('get book successfull', book_data, res);
      }

    })

  }
  public update_book(req: Request, res: Response) {
    if (req.params.id && req.body.bookID || req.body.id || req.body.title || req.body.author || req.body.version || req.body.description) {
      const book_filter = { _id: req.params.id };
      this.book_service.filterBook(book_filter, (err: any, book_data: IBook) => {
        if (err) {
          mongoError(err, res)
        }
        else if (book_data) {
          book_data.modification_notes.push({
            modified_on: new Date(Date.now()),
            modified_by: null,
            modification_note: "Book data updated"
          })
          const data_params: IBook = {
            _id: req.params.id,
            bookID: req.body.bookID,
            title: req.body.title ? req.body.title : book_data.title,
            author: req.body.author ? req.body.author : book_data.author,
            version: req.body.version ? req.body.version : book_data.version,
            description: req.body.description ? req.body.description : book_data.description,
            modification_notes: book_data.modification_notes
          };
          this.book_service.updateBook(data_params, (err: any) => {
            if (err) {
              mongoError(err, res)
            }
            else {
              successResponse('update book successfull', null, res);
            }
          });
        } else {
          failureResponse('invalid book', null, res)
        }
      });
    } else {
      insufficientParameters(res)

    }
  }
  public delete_book(req: Request, res: Response) {
    if (req.params.id) {
      this.book_service.deleteBook(req.params.id, (err: any, delete_detail: any) => {
        if (err) {
          mongoError(err, res);
        } else if (delete_detail.deletedCount !== 0) {
          successResponse('delete user succesfull', null, res);
        } else {
          failureResponse('invalid book', null, res);
        }
      });
    } else {
      insufficientParameters(res);
    }
  }

}
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