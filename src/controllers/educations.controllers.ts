import {createEducationService, deleteEducationService, getEducationService, getEducationsService, updateEducationService} from "../services/educations.services";

export const getEducationsController = async (req: any, res: any) => {
    const educations = await getEducationsService();
    return res.status(200).json(educations);
};

export const getEducationController = async (req: any, res: any) => {
    const { educationId } = req.params;
    const education = await getEducationService(educationId);
    return res.status(200).json(education);
};

export const createEducationController = async (req: any, res: any) => {
    const educations = await createEducationService(req.body);
    return res.status(201).json(educations);
};

export const updateEducationController = async (req: any, res: any) => {
    const { educationId } = req.params;
    const educationUpdated = await updateEducationService(educationId, req.body);
    return res.status(200).json(educationUpdated);
};

export const deleteEducationController = async (req: any, res: any) => {
    const { educationId } = req.params;
    const educations = await deleteEducationService(educationId);
    return res.status(200).json(educations);
};