"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EducationModel = exports.EducationsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.EducationsSchema = new mongoose_1.Schema({
    degree: {
        type: String,
        required: true
    },
    institution: {
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
    }
}, { versionKey: false });
exports.EducationModel = (0, mongoose_1.model)("Education", exports.EducationsSchema, "educations");
