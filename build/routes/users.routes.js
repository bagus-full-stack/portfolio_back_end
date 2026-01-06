"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var express_1 = __importDefault(require("express"));
var users_controllers_1 = require("../controllers/users.controllers");
var authorize_1 = require("../configuration/authorize");
var role_1 = require("../configuration/role");
exports.userRouter = express_1.default.Router();
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
exports.userRouter.get("/", (0, authorize_1.authorize)(role_1.Role.Admin), users_controllers_1.getUsersController); // all authenticated users
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
exports.userRouter.get("/:userId", (0, authorize_1.authorize)(role_1.Role.Admin), users_controllers_1.getUserController);
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
exports.userRouter.post("/", (0, authorize_1.authorize)(role_1.Role.Admin), users_controllers_1.createUserController);
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
exports.userRouter.put("/:userId", (0, authorize_1.authorize)(role_1.Role.Admin), users_controllers_1.updateUserController);
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
exports.userRouter.delete("/:userId", (0, authorize_1.authorize)(role_1.Role.Admin), users_controllers_1.deleteUserController);
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
exports.userRouter.post("/authenticate", users_controllers_1.authenticateController); // Login
