"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
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
app.use(bodyParser.json());
app.listen(port, () => {
    return console.log('Sever is running on http://localhost:%d in mode', port);
});
