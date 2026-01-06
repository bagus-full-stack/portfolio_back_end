"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRouter = void 0;
var express_1 = __importDefault(require("express"));
var projects_controllers_1 = require("../controllers/projects.controllers");
exports.projectRouter = express_1.default.Router();
/**
 * @swagger
 * tags:
 *   name: Projects
 *   description: API for managing projects
 */
/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Retrieve a list of all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: A list of projects
 */
exports.projectRouter.get("/", projects_controllers_1.getProjectsController);
/**
 * @swagger
 * /projects/{projectId}:
 *   get:
 *     summary: Retrieve a single project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project data
 */
exports.projectRouter.get("/:projectId", projects_controllers_1.getProjectController);
/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     responses:
 *       201:
 *         description: Project created
 */
exports.projectRouter.post("/", projects_controllers_1.createProjectController);
/**
 * @swagger
 * /projects/{projectId}:
 *   put:
 *     summary: Update a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project updated
 */
exports.projectRouter.put("/:projectId", projects_controllers_1.updateProjectController);
/**
 * @swagger
 * /projects/{projectId}:
 *   delete:
 *     summary: Delete a project by ID
 *     tags: [Projects]
 *     parameters:
 *       - name: projectId
 *         in: path
 *         required: true
 *         description: ID of the project to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Project deleted
 */
exports.projectRouter.delete("/:projectId", projects_controllers_1.deleteProjectController);
