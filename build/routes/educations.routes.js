"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.educationRouter = void 0;
var express_1 = __importDefault(require("express"));
var educations_controllers_1 = require("../controllers/educations.controllers");
exports.educationRouter = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Educations
 *   description: API for managing educations
 */
/**
 * @swagger
 * /educations:
 *   get:
 *     summary: Get all educations
 *     tags: [Educations]
 *     responses:
 *       200:
 *         description: A list of educations
 */
exports.educationRouter.get("/", educations_controllers_1.getEducationsController);
/**
 * @swagger
 * /educations/{educationId}:
 *   get:
 *     summary: Get education by ID
 *     tags: [Educations]
 *     parameters:
 *       - name: educationId
 *         in: path
 *         required: true
 *         description: ID of the education
 *     responses:
 *       200:
 *         description: Education data
 */
exports.educationRouter.get("/:educationId", educations_controllers_1.getEducationController);
/**
 * @swagger
 * /educations:
 *   post:
 *     summary: Create a new education
 *     tags: [Educations]
 *     responses:
 *       201:
 *         description: Education created
 */
exports.educationRouter.post("/", educations_controllers_1.createEducationController);
/**
 * @swagger
 * /educations/{educationId}:
 *   put:
 *     summary: Update education by ID
 *     tags: [Educations]
 *     parameters:
 *       - name: educationId
 *         in: path
 *         required: true
 *         description: ID of the education
 *     responses:
 *       200:
 *         description: Education updated
 */
exports.educationRouter.put("/:educationId", educations_controllers_1.updateEducationController);
/**
 * @swagger
 * /educations/{educationId}:
 *   delete:
 *     summary: Delete education by ID
 *     tags: [Educations]
 *     parameters:
 *       - name: educationId
 *         in: path
 *         required: true
 *         description: ID of the education
 *     responses:
 *       200:
 *         description: Education deleted
 */
exports.educationRouter.delete("/:educationId", educations_controllers_1.deleteEducationController);
