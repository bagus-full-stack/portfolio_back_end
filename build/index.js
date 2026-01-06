"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var educations_routes_1 = require("./routes/educations.routes");
var experiences_routes_1 = require("./routes/experiences.routes");
var profiles_routes_1 = require("./routes/profiles.routes");
var projects_routes_1 = require("./routes/projects.routes");
var skills_routes_1 = require("./routes/skills.routes");
var users_routes_1 = require("./routes/users.routes");
var errorHandler_1 = require("./configuration/errorHandler");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swagger_1 = require("./configuration/swagger");
var seeder_1 = require("./utils/seeder");
dotenv_1.default.config();
var hostname = process.env.HOSTNAME || "127.0.0.1";
var port = process.env.PORT ? parseInt(process.env.PORT) : 5000;
var mongoUri = process.env.MONGO_URI || "";
if (!mongoUri) {
    console.error("ERREUR FATALE: La variable MONGO_URI n'est pas définie dans le fichier .env");
    process.exit(1);
}
mongoose_1.default.connect(mongoUri);
var db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("DataBase Connected successfully");
                    return [4 /*yield*/, (0, seeder_1.seedDatabase)()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
app.get("/", function (req, res) {
    res.send("Hello !");
});
// API routes
app.use("/educations", educations_routes_1.educationRouter);
app.use("/experiences", experiences_routes_1.experienceRouter);
app.use("/profiles", profiles_routes_1.profileRouter);
app.use("/projects", projects_routes_1.projectRouter);
app.use("/skills", skills_routes_1.skillRouter);
app.use("/users", users_routes_1.userRouter);
// Global error handler
app.use(errorHandler_1.errorHandler);
// Swagger UI
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec, { explorer: true }));
app.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
