import express from "express";
import {createProjectController, deleteProjectController, getProjectController, getProjectsController, updateProjectController} from "../controllers/projects.controllers";

export const projectRouter = express.Router();

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
projectRouter.get("/", getProjectsController);

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
projectRouter.get("/:projectId", getProjectController);

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
projectRouter.post("/", createProjectController);

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
projectRouter.put("/:projectId", updateProjectController);

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
projectRouter.delete("/:projectId", deleteProjectController);