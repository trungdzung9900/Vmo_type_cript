"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute_1 = require("./route/userRoute");
const bookRoute_1 = require("./route/bookRoute");
const dotenv = require("dotenv");
dotenv.config();
class App {
    constructor() {
        this.mongoUrl = process.env.DB_CONNECT;
        this.user_routes = new userRoute_1.UserRoutes();
        this.book_routes = new bookRoute_1.BookRoute();
        this.app = express();
        this.config();
        this.mongoSetup();
        this.user_routes.route(this.app);
        this.book_routes.route(this.app);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        // support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    mongoSetup() {
        const DB = mongoose.connect(this.mongoUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
    }
}
exports.default = new App().app;
