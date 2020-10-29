"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var authorCollection_1 = __importDefault(require("./authorCollection"));
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.createUser = function (user_params, callback) {
        var _session = new authorCollection_1.default(user_params);
        _session.save(callback);
    };
    UserService.prototype.filterUser = function (query, callback) {
        authorCollection_1.default.findOne(query, callback);
    };
    UserService.prototype.updateUser = function (user_params, callback) {
        var query = { _id: user_params._id };
        authorCollection_1.default.findOneAndUpdate(query, user_params, callback);
    };
    UserService.prototype.deleteUser = function (_id, callback) {
        var query = { _id: _id };
        authorCollection_1.default.deleteOne(query, callback);
    };
    UserService.prototype.getUsers = function (callback) {
        authorCollection_1.default.find({}, callback);
    };
    return UserService;
}());
exports.default = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vYXV0aG9yL2F1dGhvclNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx3RUFBdUM7QUFFdkM7SUFBQTtJQXlCQSxDQUFDO0lBdkJVLGdDQUFVLEdBQWpCLFVBQWtCLFdBQWtCLEVBQUUsUUFBYTtRQUMvQyxJQUFNLFFBQVEsR0FBRyxJQUFJLDBCQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDeEMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsS0FBVSxFQUFFLFFBQWE7UUFDdkMsMEJBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFTSxnQ0FBVSxHQUFqQixVQUFrQixXQUFrQixFQUFFLFFBQWE7UUFDL0MsSUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEVBQUUsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLDBCQUFLLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6RCxDQUFDO0lBRU0sZ0NBQVUsR0FBakIsVUFBa0IsR0FBVyxFQUFFLFFBQWE7UUFDeEMsSUFBTSxLQUFLLEdBQUcsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDO1FBQ3RCLDBCQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRU0sOEJBQVEsR0FBZixVQUFnQixRQUFZO1FBQ3hCLDBCQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDIn0=