import express from "express";
import { authenticateController, createUserController, deleteUserController, getUserController, getUsersController, updateUserController } from "../controllers/users.controllers";
import {authorize} from "../configuration/authorize";
import {Role} from "../configuration/role";

export const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API for managing users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of all users (authenticated users only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users
 */
userRouter.get("/", authorize(Role.Admin), getUsersController); // all authenticated users

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Retrieve a single user by ID (authenticated users only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User data
 */
userRouter.get("/:userId", authorize(Role.Admin), getUserController);


/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user (Admin only)
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: User created
 */
userRouter.post("/", authorize(Role.Admin), createUserController);


/**
 * @swagger
 * /users/{userId}:
 *   put:
 *     summary: Update a user by ID (authenticated users only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user to update
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User updated
 */
userRouter.put("/:userId", authorize(Role.Admin), updateUserController);

/**
 * @swagger
 * /users/{userId}:
 *   delete:
 *     summary: Delete a user by ID (authenticated users only)
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: userId
 *         in: path
 *         required: true
 *         description: ID of the user to delete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted
 */
userRouter.delete("/:userId", authorize(Role.Admin), deleteUserController);

/**
 * @openapi
 * /users/authenticate:
 *   post:
 *     summary: Authenticate user (public route)
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Authentication successful
 */
userRouter.post("/authenticate", authenticateController); // Login