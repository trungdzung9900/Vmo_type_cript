import * as express from "express"
import * as bookController from './common/book/bookController'
import * as bodyParser from 'body-parser'
import * as mongoose from "mongoose";
import * as dotenv from 'dotenv';
const app = express()
const port = 3000

dotenv.config();
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true
})
  .then(() => {
      console.log("Successfully connected to the database");
  })
  .catch(err => {
      console.log('Could not connect to the database. Exiting now...', err);
      process.exit();
  });

app.use(bodyParser.json())
app.listen (port,() =>{
    return console.log('Sever is running on http://localhost:%d in mode', port )
}); 