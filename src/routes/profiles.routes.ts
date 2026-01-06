import express from "express";
import {createProfileController, deleteProfileController, getProfileController, getProfilesController, updateProfileController} from "../controllers/profiles.controllers";

export const profileRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Profiles
 *   description: API for managing profiles
 */

/**
 * @swagger
 * /profiles:
 *   get:
 *     summary: Retrieve a list of all profiles
 *     tags: [Profiles]
 *     responses:
 *       200:
 *         description: A list of profiles
 */
profileRouter.get("/", getProfilesController);

/**
 * @swagger
 * /profiles/{profileId}:
 *   get:
 *     summary: Retrieve a single profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - name: profileId
 *         in: path
 *         required: true
 *         description: ID of the profile to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile data
 */
profileRouter.get("/:profileId", getProfileController);

/**
 * @swagger
 * /profiles:
 *   post:
 *     summary: Create a new profile
 *     tags: [Profiles]
 *     responses:
 *       201:
 *         description: Profile created
 */
profileRouter.post("/", createProfileController);

/**
 * @swagger
 * /profiles/{profileId}:
 *   put:
 *     summary: Update a profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - name: profileId
 *         in: path
 *         required: true
 *         description: ID of the profile to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile updated
 */
profileRouter.put("/:profileId", updateProfileController);

/**
 * @swagger
 * /profiles/{profileId}:
 *   delete:
 *     summary: Delete a profile by ID
 *     tags: [Profiles]
 *     parameters:
 *       - name: profileId
 *         in: path
 *         required: true
 *         description: ID of the profile to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Profile deleted
 */
profileRouter.delete("/:profileId", deleteProfileController);