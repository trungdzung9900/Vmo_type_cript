"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoute_1 = require("./route/userRoute");
const bookRoute_1 = require("./route/bookRoute");
class App {
    constructor() {
        this.mongoUrl = 'mongodb://rubydog99:dungpro123a@cluster0-shard-00-00.ruuvi.mongodb.net:27017,cluster0-shard-00-01.ruuvi.mongodb.net:27017,cluster0-shard-00-02.ruuvi.mongodb.net:27017/test?ssl=true&replicaSet=atlas-7j78bq-shard-0&authSource=admin&retryWrites=true&w=majority';
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
