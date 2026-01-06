"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UsersSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UsersSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    role: {
        type: String,
        required: true,
        trim: true
    }
}, { versionKey: false });
exports.UserModel = (0, mongoose_1.model)("User", exports.UsersSchema, "users");
