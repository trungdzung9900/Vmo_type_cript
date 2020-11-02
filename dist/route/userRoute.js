"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const authorController_1 = require("../common/author/authorController");
class UserRoutes {
    constructor() {
        this.user_controller = new authorController_1.UserController();
    }
    route(app) {
        app.post('/author', (req, res) => {
            this.user_controller.create_user(req, res);
        });
        app.get('/author/:id', (req, res) => {
            this.user_controller.get_user(req, res);
        });
        app.put('/author/:id', (req, res) => {
            this.user_controller.update_user(req, res);
        });
        app.delete('/author/:id', (req, res) => {
            this.user_controller.delete_user(req, res);
        });
    }
}
exports.UserRoutes = UserRoutes;
