import {createProjectService, deleteProjectService, getProjectService, getProjectsService, updateProjectService} from "../services/projects.services";

export const getProjectsController = async (req: any, res: any) => {
    const projects = await getProjectsService();
    return res.status(200).json(projects);
};

export const getProjectController = async (req: any, res: any) => {
    const { projectId } = req.params;
    const project = await getProjectService(projectId);
    return res.status(200).json(project);
};

export const createProjectController = async (req: any, res: any) => {
    const projects = await createProjectService(req.body);
    return res.status(201).json(projects);
};

export const updateProjectController = async (req: any, res: any) => {
    const { projectId } = req.params;
    const projectUpdated = await updateProjectService(projectId, req.body);
    return res.status(200).json(projectUpdated);
};

export const deleteProjectController = async (req: any, res: any) => {
    const { projectId } = req.params;
    const projects = await deleteProjectService(projectId);
    return res.status(200).json(projects);
};