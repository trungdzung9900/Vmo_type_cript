"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var authorController_1 = require("../common/author/authorController");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
        this.user_controller = new authorController_1.UserController();
    }
    UserRoutes.prototype.route = function (app) {
        var _this = this;
        app.post('/api/user', function (req, res) {
            _this.user_controller.create_user(req, res);
        });
        app.get('/api/user/:id', function (req, res) {
            _this.user_controller.get_user(req, res);
        });
        app.put('/api/user/:id', function (req, res) {
            _this.user_controller.update_user(req, res);
        });
        app.delete('/api/user/:id', function (req, res) {
            _this.user_controller.delete_user(req, res);
        });
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJvdXRlLmpzIiwic291cmNlUm9vdCI6Ii4vc3JjLyIsInNvdXJjZXMiOlsic3JjL3JvdXRlL3VzZXJSb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxzRUFBbUU7QUFFbkU7SUFBQTtRQUVVLG9CQUFlLEdBQW1CLElBQUksaUNBQWMsRUFBRSxDQUFDO0lBcUJqRSxDQUFDO0lBbkJRLDBCQUFLLEdBQVosVUFBYSxHQUFnQjtRQUE3QixpQkFrQkM7UUFoQkMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYTtZQUNoRCxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7UUFFSCxHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhO1lBQ25ELEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7WUFDbkQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQyxDQUFDO1FBRUgsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYTtZQUN0RCxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDN0MsQ0FBQyxDQUFDLENBQUM7SUFFTCxDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBdkJELElBdUJDO0FBdkJZLGdDQUFVIn0=