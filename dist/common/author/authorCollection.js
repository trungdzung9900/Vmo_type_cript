"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../../module/model");
const mongoose = require("mongoose");
const schema = new mongoose.Schema({
    name: {
        type: {
            first_name: String,
            middle_name: String,
            last_name: String
        }
    },
    email: String,
    phone_number: String,
    gender: String,
    modification_notes: [model_1.ModificationNote]
});
exports.default = mongoose.model('users', schema);
