import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import {educationRouter} from "./routes/educations.routes";
import {experienceRouter} from "./routes/experiences.routes";
import {profileRouter} from "./routes/profiles.routes";
import {projectRouter} from "./routes/projects.routes";
import {skillRouter} from "./routes/skills.routes";
import {userRouter} from "./routes/users.routes";
import {errorHandler} from "./configuration/errorHandler";
import swaggerUi from "swagger-ui-express";
import {swaggerSpec} from "./configuration/swagger";
import {seedDatabase} from "./utils/seeder";


dotenv.config();

const hostname = process.env.HOSTNAME || "127.0.0.1";
const port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
const mongoUri = process.env.MONGO_URI || "";

if (!mongoUri) {
    console.error("ERREUR FATALE: La variable MONGO_URI n'est pas définie dans le fichier .env");
    process.exit(1);
}

mongoose.connect(mongoUri);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", async function () {
    console.log("DataBase Connected successfully");
    await seedDatabase();
});

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.get("/", (req, res) => {
  res.send("Hello !");
});

// API routes
app.use("/educations", educationRouter);
app.use("/experiences", experienceRouter);
app.use("/profiles", profileRouter);
app.use("/projects", projectRouter);
app.use("/skills", skillRouter);
app.use("/users", userRouter);

// Global error handler
app.use(errorHandler);

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});