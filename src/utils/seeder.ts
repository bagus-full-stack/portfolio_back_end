import {Model} from "mongoose";
import {UserModel} from "../models/users.models";
import {SkillModel} from "../models/skills.models";
import {ProjectModel} from "../models/projects.models";
import {ProfileModel} from "../models/profiles.models";
import {ExperienceModel} from "../models/experiences.models";
import {EducationModel} from "../models/educations.models";
import {initialEducations, initialExperiences, initialProfiles, initialProjects, initialSkills, initialUsers} from "../data/seedData";

interface SeedConfig {
    label: string;
    model: Model<any>;
    data: any[];
}

export const seedDatabase = async () => {
    const resources: SeedConfig[] = [
        { label: "Educations", model: EducationModel, data: initialEducations },
        { label: "Experiences", model: ExperienceModel, data: initialExperiences },
        { label: "Profiles", model: ProfileModel, data: initialProfiles },
        { label: "Projects", model: ProjectModel, data: initialProjects },
        { label: "Skills", model: SkillModel, data: initialSkills },
        { label: "Users", model: UserModel, data: initialUsers }
    ];

    try {
        for (const resource of resources) {
            const count = await resource.model.countDocuments();

            if (count === 0) {
                await resource.model.insertMany(resource.data);
                console.log(`Données '${resource.label}' chargées avec succès !`);
            } else {
                console.log(`ℹ️  Collection '${resource.label}' déjà initialisée (${count} éléments).`);
            }
        }
    } catch (error) {
        console.error("Erreur critique lors du chargement des données :", error);
    }
};