import * as  express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import { UserRoutes } from './route/userRoute';
import { BookRoute } from './route/bookRoute';
class App {
  public app: express.Application;
  public mongoUrl: string = 'mongodb://rubydog99:dungpro123a@cluster0-shard-00-00.ruuvi.mongodb.net:27017,cluster0-shard-00-01.ruuvi.mongodb.net:27017,cluster0-shard-00-02.ruuvi.mongodb.net:27017/test?ssl=true&replicaSet=atlas-7j78bq-shard-0&authSource=admin&retryWrites=true&w=majority';
  private user_routes: UserRoutes = new UserRoutes();
  private book_routes : BookRoute = new BookRoute();

  constructor() {
    this.app = express();
    this.config();
    this.mongoSetup();
    this.user_routes.route(this.app);
    this.book_routes.route(this.app);
  }
  private config(): void {
    // support application/json type post data
    this.app.use(bodyParser.json());
    // support application/x-www-form-urlencoded post data
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private mongoSetup(): void {
   const DB = mongoose.connect(this.mongoUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      })
  }
}

export default new App().app;