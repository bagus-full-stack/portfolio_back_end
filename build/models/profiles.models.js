"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileModel = exports.ProfilesSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProfilesSchema = new mongoose_1.Schema({
    username: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String
    },
    resume: {
        type: String,
        required: true
    },
    github: {
        type: String,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    twitter: {
        type: String,
        required: true
    }
}, { versionKey: false });
exports.ProfileModel = (0, mongoose_1.model)("Profile", exports.ProfilesSchema, "profiles");
