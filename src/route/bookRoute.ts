import { Application, Request, Response } from 'express';
import { UserController } from '../common/author/authorController';

export class BookInfo {

  private user_controller: UserController = new UserController();

  public route(app: Application) {

    app.get('/books',bookController.allBooks)

    app.get('/api/user/:id', (req: Request, res: Response) => {
      this.user_controller.get_user(req, res);
    });

    app.put('/api/user/:id', (req: Request, res: Response) => {
      this.user_controller.update_user(req, res);
    });

    app.delete('/api/user/:id', (req: Request, res: Response) => {
      this.user_controller.delete_user(req, res);
    });

  }
}


app.get('/books',bookController.allBooks)
app.get('/book/:id',bookController.getBook)
app.post('/book',bookController.addBook)
app.delete('/book/:id',bookController.deleteBook)
app.put('/book/:id',bookController.updateBook)