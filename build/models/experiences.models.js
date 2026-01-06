"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExperienceModel = exports.ExperiencesSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ExperiencesSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    period: {
        type: String,
        required: true
    },
    place: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, { versionKey: false });
exports.ExperienceModel = (0, mongoose_1.model)("Experience", exports.ExperiencesSchema, "experiences");
