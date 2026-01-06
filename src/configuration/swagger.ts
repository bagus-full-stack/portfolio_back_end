import swaggerJsdoc from "swagger-jsdoc";
import {UsersSchema} from "../models/users.models";
import path from "node:path";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "LogRocket Express API with Swagger",
            version: "1.0.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "LogRocket",
                url: "https://logrocket.com",
                email: "info@email.com",
            },
        },
        servers: [
            {
                url: "http://localhost:5000", description: 'Serveur local'
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                }
            }
        },
        security: [
            {
                bearerAuth: []
            }
        ],
    },
    apis: [path.join(__dirname, '../routes/*.ts')]
}

export const swaggerSpec = swaggerJsdoc(swaggerOptions);
