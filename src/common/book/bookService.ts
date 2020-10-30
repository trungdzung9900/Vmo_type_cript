// import {IBook} from './bookCollections';
import Book from './bookCollections'
import {IBook} from './bookCollections'

export default class BookService {

  public createBook(book_params : IBook, callback :any){
    const _session = new Book(book_params)
    _session.save(callback);
  }
  public allBook(callback:any){
    Book.find(callback)
  }
  public filterBook (query : any ,callback : any){
    Book.findOne(query,callback)
  }
  public updateBook (book_params:IBook,callback :any){
    const query = {_id:book_params._id};
    Book.findOneAndUpdate(query, book_params, callback);
  }
  public deleteBook (_id :string,callback :any){
    
    Book.find({},callback)
  }
  public pagingBook(limit: number,page:number,callback:any){
    const startIndex = (page - 1) * limit
    const endIndex = page * limit
    Book.find().skip(startIndex).limit(endIndex)
  }
}