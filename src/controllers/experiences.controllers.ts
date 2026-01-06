import {createExperienceService, deleteExperienceService, getExperienceService, getExperiencesService, updateExperienceService} from "../services/experiences.services";

export const getExperiencesController = async (req: any, res: any) => {
    const experiences = await getExperiencesService();
    return res.status(200).json(experiences);
};

export const getExperienceController = async (req: any, res: any) => {
    const { experienceId } = req.params;
    const experience = await getExperienceService(experienceId);
    return res.status(200).json(experience);
};

export const createExperienceController = async (req: any, res: any) => {
    const experiences = await createExperienceService(req.body);
    return res.status(201).json(experiences);
};

export const updateExperienceController = async (req: any, res: any) => {
    const { experienceId } = req.params;
    const experienceUpdated = await updateExperienceService(experienceId, req.body);
    return res.status(200).json(experienceUpdated);
};

export const deleteExperienceController = async (req: any, res: any) => {
    const { experienceId } = req.params;
    const experiences = await deleteExperienceService(experienceId);
    return res.status(200).json(experiences);
};