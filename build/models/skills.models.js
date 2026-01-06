"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkillModel = exports.SkillsSchema = void 0;
var mongoose_1 = require("mongoose");
exports.SkillsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    }
}, { versionKey: false });
exports.SkillModel = (0, mongoose_1.model)("Skill", exports.SkillsSchema, "skills");
