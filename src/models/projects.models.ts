import {Document, Model, model, Schema, Types} from "mongoose";
import {Skill, SkillsSchema} from "./skills.models";

export const ProjectsSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        tools: {
            type: [String],
            required: true
        },
        demoUrl: {
            type: String,
            required: true
        },
        githubUrl: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        details: {
            type: String,
            required: true
        },
    },
    { versionKey: false}
);

export interface IProject {
    _id: Types.ObjectId,
    title: string,
    description: string,
    image: string,
    tools: [string],
    demoUrl: string,
    githubUrl: string,
    category: string,
    details: string
}

export interface Project extends Omit<IProject, "_id">, Document {}

export const ProjectModel = model<IProject, Model<IProject>>(
    "Project",
    ProjectsSchema,
    "projects"
);