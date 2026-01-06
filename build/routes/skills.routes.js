"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillRouter = void 0;
var express_1 = __importDefault(require("express"));
var skills_controllers_1 = require("../controllers/skills.controllers");
exports.skillRouter = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Skills
 *   description: API for managing skills
 */
/**
 * @swagger
 * /skills:
 *   get:
 *     summary: Retrieve a list of all skills
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: A list of skills
 */
exports.skillRouter.get("/", skills_controllers_1.getSkillsController);
/**
 * @swagger
 * /skills/{skillId}:
 *   get:
 *     summary: Retrieve a single skill by ID
 *     tags: [Skills]
 *     parameters:
 *       - name: skillId
 *         in: path
 *         required: true
 *         description: ID of the skill to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Skill data
 */
exports.skillRouter.get("/:skillId", skills_controllers_1.getSkillController);
/**
 * @swagger
 * /skills:
 *   post:
 *     summary: Create a new skill
 *     tags: [Skills]
 *     responses:
 *       201:
 *         description: Skill created
 */
exports.skillRouter.post("/", skills_controllers_1.createSkillController);
/**
 * @swagger
 * /skills/{skillId}:
 *   put:
 *     summary: Update a skill by ID
 *     tags: [Skills]
 *     parameters:
 *       - name: skillId
 *         in: path
 *         required: true
 *         description: ID of the skill to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Skill updated
 */
exports.skillRouter.put("/:skillId", skills_controllers_1.updateSkillController);
/**
 * @swagger
 * /skills/{skillId}:
 *   delete:
 *     summary: Delete a skill by ID
 *     tags: [Skills]
 *     parameters:
 *       - name: skillId
 *         in: path
 *         required: true
 *         description: ID of the skill to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Skill deleted
 */
exports.skillRouter.delete("/:skillId", skills_controllers_1.deleteSkillController);
