import express from "express";
import {createSkillController, deleteSkillController, getSkillController, getSkillsController, updateSkillController} from "../controllers/skills.controllers";

export const skillRouter = express.Router();

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
skillRouter.get("/", getSkillsController);

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
skillRouter.get("/:skillId", getSkillController);

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
skillRouter.post("/", createSkillController);

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
skillRouter.put("/:skillId", updateSkillController);

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
skillRouter.delete("/:skillId", deleteSkillController);