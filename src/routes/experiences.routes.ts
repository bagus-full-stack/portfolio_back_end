import express from "express";
import {createExperienceController, deleteExperienceController, getExperienceController, getExperiencesController, updateExperienceController} from "../controllers/experiences.controllers";

export const experienceRouter = express.Router();

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
experienceRouter.get("/", getExperiencesController);

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
experienceRouter.get("/:experienceId", getExperienceController);

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
experienceRouter.post("/", createExperienceController);

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
experienceRouter.put("/:experienceId", updateExperienceController);

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
experienceRouter.delete("/:experienceId", deleteExperienceController);