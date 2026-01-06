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
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDatabase = void 0;
var users_models_1 = require("../models/users.models");
var skills_models_1 = require("../models/skills.models");
var projects_models_1 = require("../models/projects.models");
var profiles_models_1 = require("../models/profiles.models");
var experiences_models_1 = require("../models/experiences.models");
var educations_models_1 = require("../models/educations.models");
var seedData_1 = require("../data/seedData");
var seedDatabase = function () { return __awaiter(void 0, void 0, void 0, function () {
    var resources, _i, resources_1, resource, count, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                resources = [
                    { label: "Educations", model: educations_models_1.EducationModel, data: seedData_1.initialEducations },
                    { label: "Experiences", model: experiences_models_1.ExperienceModel, data: seedData_1.initialExperiences },
                    { label: "Profiles", model: profiles_models_1.ProfileModel, data: seedData_1.initialProfiles },
                    { label: "Projects", model: projects_models_1.ProjectModel, data: seedData_1.initialProjects },
                    { label: "Skills", model: skills_models_1.SkillModel, data: seedData_1.initialSkills },
                    { label: "Users", model: users_models_1.UserModel, data: seedData_1.initialUsers }
                ];
                _a.label = 1;
            case 1:
                _a.trys.push([1, 8, , 9]);
                _i = 0, resources_1 = resources;
                _a.label = 2;
            case 2:
                if (!(_i < resources_1.length)) return [3 /*break*/, 7];
                resource = resources_1[_i];
                return [4 /*yield*/, resource.model.countDocuments()];
            case 3:
                count = _a.sent();
                if (!(count === 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, resource.model.insertMany(resource.data)];
            case 4:
                _a.sent();
                console.log("Donn\u00E9es '".concat(resource.label, "' charg\u00E9es avec succ\u00E8s !"));
                return [3 /*break*/, 6];
            case 5:
                console.log("\u2139\uFE0F  Collection '".concat(resource.label, "' d\u00E9j\u00E0 initialis\u00E9e (").concat(count, " \u00E9l\u00E9ments)."));
                _a.label = 6;
            case 6:
                _i++;
                return [3 /*break*/, 2];
            case 7: return [3 /*break*/, 9];
            case 8:
                error_1 = _a.sent();
                console.error("Erreur critique lors du chargement des données :", error_1);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.seedDatabase = seedDatabase;
