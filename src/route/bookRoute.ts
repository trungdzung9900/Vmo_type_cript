import { Application, Request, Response } from 'express';
import { BookController } from "../common/book/bookController"

export class BookRoute {

  private book_controller = new BookController();

  public route(app: Application) {

    app.get('/book/:id', (req: Request, res: Response) => {
      this.book_controller.get_book(req, res)
    })

    app.get('/books/', (req: Request, res: Response) => {
      this.book_controller.get_all_book(req, res)
    })
    app.get('/book/', (req: Request, res: Response) => {
      this.book_controller.paging_book(req, res)
    })
    app.post('/book/', (req: Request, res: Response) => {
      this.book_controller.create_book(req, res)
    })

    app.put('/book/:id', (req: Request, res: Response) => {
      this.book_controller.update_book(req, res);
    });

    app.delete('/book/:id', (req: Request, res: Response) => {
      this.book_controller.delete_book(req, res);
    });

  }
}
