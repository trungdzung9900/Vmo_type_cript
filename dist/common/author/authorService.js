"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authorCollection_1 = require("./authorCollection");
class UserService {
    createUser(user_params, callback) {
        const _session = new authorCollection_1.default(user_params);
        _session.save(callback);
    }
    filterUser(query, callback) {
        authorCollection_1.default.findOne(query, callback);
    }
    updateUser(user_params, callback) {
        const query = { _id: user_params._id };
        authorCollection_1.default.findOneAndUpdate(query, user_params, callback);
    }
    deleteUser(_id, callback) {
        const query = { _id };
        authorCollection_1.default.deleteOne(query, callback);
    }
    getUsers(callback) {
        authorCollection_1.default.find({}, callback);
    }
}
exports.default = UserService;
