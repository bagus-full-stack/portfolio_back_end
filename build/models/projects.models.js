"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectModel = exports.ProjectsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.ProjectsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    tools: {
        type: [String],
        required: true
    },
    demoUrl: {
        type: String,
        required: true
    },
    githubUrl: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    details: {
        type: String,
        required: true
    },
}, { versionKey: false });
exports.ProjectModel = (0, mongoose_1.model)("Project", exports.ProjectsSchema, "projects");
