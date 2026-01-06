"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.experienceRouter = void 0;
var express_1 = __importDefault(require("express"));
var experiences_controllers_1 = require("../controllers/experiences.controllers");
exports.experienceRouter = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Experiences
 *   description: API for managing experiences
 */
/**
 * @swagger
 * /experiences:
 *   get:
 *     summary: Retrieve a list of all experiences
 *     tags: [Experiences]
 *     responses:
 *       200:
 *         description: A list of experiences
 */
exports.experienceRouter.get("/", experiences_controllers_1.getExperiencesController);
/**
 * @swagger
 * /experiences/{experienceId}:
 *   get:
 *     summary: Retrieve a single experience by ID
 *     tags: [Experiences]
 *     parameters:
 *       - name: experienceId
 *         in: path
 *         required: true
 *         description: ID of the experience to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Experience data
 */
exports.experienceRouter.get("/:experienceId", experiences_controllers_1.getExperienceController);
/**
 * @swagger
 * /experiences:
 *   post:
 *     summary: Create a new experience
 *     tags: [Experiences]
 *     responses:
 *       201:
 *         description: Experience created
 */
exports.experienceRouter.post("/", experiences_controllers_1.createExperienceController);
/**
 * @swagger
 * /experiences/{experienceId}:
 *   put:
 *     summary: Update an experience by ID
 *     tags: [Experiences]
 *     parameters:
 *       - name: experienceId
 *         in: path
 *         required: true
 *         description: ID of the experience to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Experience updated
 */
exports.experienceRouter.put("/:experienceId", experiences_controllers_1.updateExperienceController);
/**
 * @swagger
 * /experiences/{experienceId}:
 *   delete:
 *     summary: Delete an experience by ID
 *     tags: [Experiences]
 *     parameters:
 *       - name: experienceId
 *         in: path
 *         required: true
 *         description: ID of the experience to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Experience deleted
 */
exports.experienceRouter.delete("/:experienceId", experiences_controllers_1.deleteExperienceController);
