"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
var service_1 = require("../../module/service");
var authorService_1 = __importDefault(require("./authorService"));
var UserController = /** @class */ (function () {
    function UserController() {
        this.user_service = new authorService_1.default();
    }
    UserController.prototype.create_user = function (req, res) {
        // this check whether all the filds were send through the request or not
        if (req.body.name && req.body.name.first_name && req.body.name.middle_name && req.body.name.last_name &&
            req.body.email &&
            req.body.phone_number &&
            req.body.gender) {
            var user_params = {
                name: {
                    first_name: req.body.name.first_name,
                    middle_name: req.body.name.middle_name,
                    last_name: req.body.name.last_name
                },
                email: req.body.email,
                phone_number: req.body.phone_number,
                gender: req.body.gender,
                modification_notes: [{
                        modified_on: new Date(Date.now()),
                        modified_by: "null",
                        modification_note: 'New user created'
                    }]
            };
            this.user_service.createUser(user_params, function (err, user_data) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('create user successfull', user_data, res);
                }
            });
        }
        else {
            // error response if some fields are missing in request body
            service_1.insufficientParameters(res);
        }
    };
    UserController.prototype.get_user = function (req, res) {
        if (req.params.id) {
            var user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, function (err, user_data) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else {
                    service_1.successResponse('get user successfull', user_data, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    };
    UserController.prototype.update_user = function (req, res) {
        var _this = this;
        if (req.params.id &&
            req.body.name || req.body.name.first_name || req.body.name.middle_name || req.body.name.last_name ||
            req.body.email ||
            req.body.phone_number ||
            req.body.gender) {
            var user_filter = { _id: req.params.id };
            this.user_service.filterUser(user_filter, function (err, user_data) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (user_data) {
                    user_data.modification_notes.push({
                        modified_on: new Date(Date.now()),
                        modified_by: "null",
                        modification_note: 'User data updated'
                    });
                    var user_params = {
                        _id: req.params.id,
                        name: req.body.name ? {
                            first_name: req.body.name.first_name ? req.body.name.first_name : user_data.name.first_name,
                            middle_name: req.body.name.first_name ? req.body.name.middle_name : user_data.name.middle_name,
                            last_name: req.body.name.first_name ? req.body.name.last_name : user_data.name.last_name
                        } : user_data.name,
                        email: req.body.email ? req.body.email : user_data.email,
                        phone_number: req.body.phone_number ? req.body.phone_number : user_data.phone_number,
                        gender: req.body.gender ? req.body.gender : user_data.gender,
                        is_deleted: req.body.is_deleted ? req.body.is_deleted : user_data.is_deleted,
                        modification_notes: user_data.modification_notes
                    };
                    _this.user_service.updateUser(user_params, function (error) {
                        if (error) {
                            service_1.mongoError(error, res);
                        }
                        else {
                            service_1.successResponse('update user successfull', null, res);
                        }
                    });
                }
                else {
                    service_1.failureResponse('invalid user', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    };
    UserController.prototype.delete_user = function (req, res) {
        if (req.params.id) {
            this.user_service.deleteUser(req.params.id, function (err, delete_details) {
                if (err) {
                    service_1.mongoError(err, res);
                }
                else if (delete_details.deletedCount !== 0) {
                    service_1.successResponse('delete user successfull', null, res);
                }
                else {
                    service_1.failureResponse('invalid user', null, res);
                }
            });
        }
        else {
            service_1.insufficientParameters(res);
        }
    };
    return UserController;
}());
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aG9yQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIuL3NyYy8iLCJzb3VyY2VzIjpbInNyYy9jb21tb24vYXV0aG9yL2F1dGhvckNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EsZ0RBQTRHO0FBRTVHLGtFQUEwQztBQUkxQztJQUFBO1FBRVksaUJBQVksR0FBZ0IsSUFBSSx1QkFBVyxFQUFFLENBQUM7SUErRzFELENBQUM7SUE3R1Usb0NBQVcsR0FBbEIsVUFBbUIsR0FBWSxFQUFFLEdBQWE7UUFDMUMsd0VBQXdFO1FBQ3hFLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTO1lBQ2pHLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUNkLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWTtZQUNyQixHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNqQixJQUFNLFdBQVcsR0FBVTtnQkFDdkIsSUFBSSxFQUFFO29CQUNGLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVO29CQUNwQyxXQUFXLEVBQUUsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVztvQkFDdEMsU0FBUyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVM7aUJBQ3JDO2dCQUNELEtBQUssRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUs7Z0JBQ3JCLFlBQVksRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVk7Z0JBQ25DLE1BQU0sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU07Z0JBQ3ZCLGtCQUFrQixFQUFFLENBQUM7d0JBQ2pCLFdBQVcsRUFB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