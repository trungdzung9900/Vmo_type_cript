"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookSchema = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var uri = "mongodb+srv://rubydog99:dungpro123a@cluster0.ruuvi.mongodb.net/test?retryWrites=true&w=majority";
mongoose_1.default.connect(uri, function (err) {
    if (err) {
        console.log(err.message);
    }
    else {
        console.log("Successfully Connected!");
    }
});
// export interface IBook extends mongoose.Document {
//   title: string;
//   author: number;
// }
exports.BookSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    version: { type: Number, required: true },
    description: { type: String, required: true }
});
var Book = mongoose_1.default.model("Book", exports.BookSchema);
exports.default = Book;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vay5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vYm9vay9ib29rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUFnQztBQUVoQyxJQUFNLEdBQUcsR0FBVyxpR0FBaUcsQ0FBQztBQUV0SCxrQkFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsVUFBQyxHQUFRO0lBQzdCLElBQUksR0FBRyxFQUFFO1FBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDMUI7U0FBTTtRQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztLQUN4QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgscURBQXFEO0FBQ3JELG1CQUFtQjtBQUNuQixvQkFBb0I7QUFDcEIsSUFBSTtBQUVTLFFBQUEsVUFBVSxHQUFHLElBQUksa0JBQVEsQ0FBQyxNQUFNLENBQUM7SUFDNUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQ3ZDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRTtJQUN4QyxPQUFPLEVBQUcsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFFLFFBQVEsRUFBQyxJQUFJLEVBQUM7SUFDdEMsV0FBVyxFQUFHLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFDO0NBQzNDLENBQUMsQ0FBQztBQUVILElBQU0sSUFBSSxHQUFHLGtCQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxrQkFBVSxDQUFDLENBQUM7QUFDaEQsa0JBQWUsSUFBSSxDQUFDIn0=