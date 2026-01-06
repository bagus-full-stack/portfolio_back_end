# Portfolio Back End
Code source initial du TD1


# (userRouter.get&#40;"/", getUsersController&#41;; // all authenticated users)


# userRouter.post("/", createUserController); // SignUp

# /**
# * @swagger
# * /users:
# *   post:
# *     summary: Create a new user (public route)
# *     tags: [Users]
# *     security:
# *       - bearerAuth: []
# *     responses:
# *       201:
# *         description: User created
# */
# userRouter.post("/", authorize(Role.Admin), createUserController); // SignUp
