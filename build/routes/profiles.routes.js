"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileRouter = void 0;
var express_1 = __importDefault(require("express"));
var profiles_controllers_1 = require("../controllers/profiles.controllers");
exports.profileRouter = express_1.default.Router();
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
exports.profileRouter.get("/", profiles_controllers_1.getProfilesController);
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
exports.profileRouter.get("/:profileId", profiles_controllers_1.getProfileController);
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
exports.profileRouter.post("/", profiles_controllers_1.createProfileController);
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
exports.profileRouter.put("/:profileId", profiles_controllers_1.updateProfileController);
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
exports.profileRouter.delete("/:profileId", profiles_controllers_1.deleteProfileController);
