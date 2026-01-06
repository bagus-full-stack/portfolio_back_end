import express from "express";
import {createEducationController, deleteEducationController, getEducationController, getEducationsController, updateEducationController} from "../controllers/educations.controllers";

export const educationRouter = express.Router();

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
educationRouter.get("/", getEducationsController);

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
educationRouter.get("/:educationId", getEducationController);

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
educationRouter.post("/", createEducationController);

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
educationRouter.put("/:educationId", updateEducationController);

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
educationRouter.delete("/:educationId", deleteEducationController);