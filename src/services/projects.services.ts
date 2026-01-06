import {Types} from "mongoose";
import {Project, ProjectModel} from "../models/projects.models";

export const getProjectsService = async () => {
    return ProjectModel.find();
};

export const getProjectService = async (projectId: string) => {
    return ProjectModel.findById(new Types.ObjectId(projectId));
};

export const createProjectService = async (newProject: Project) => {
    const projectToCreate = new ProjectModel(newProject);
    await projectToCreate.save();

    return getProjectsService();
};

export const updateProjectService = async (projectId: string, projectToUpdate: Project) => {
    await ProjectModel.updateOne(
        {
            _id: new Types.ObjectId(projectId),
        },
        projectToUpdate
    );
    return await getProjectsService();
};

export const deleteProjectService = async (projectId: string) => {
    await ProjectModel.findByIdAndDelete(new Types.ObjectId(projectId));
    return await getProjectsService();
};