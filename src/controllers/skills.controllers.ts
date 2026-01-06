import {createSkillService, deleteSkillService, getSkillService, getSkillsService, updateSkillService} from "../services/skills.services";

export const getSkillsController = async (req: any, res: any) => {
    const skills = await getSkillsService();
    return res.status(200).json(skills);
};

export const getSkillController = async (req: any, res: any) => {
    const { skillId } = req.params;
    const skill = await getSkillService(skillId);
    return res.status(200).json(skill);
};

export const createSkillController = async (req: any, res: any) => {
    const skills = await createSkillService(req.body);
    return res.status(201).json(skills);
};

export const updateSkillController = async (req: any, res: any) => {
    const { skillId } = req.params;
    const skillUpdated = await updateSkillService(skillId, req.body);
    return res.status(200).json(skillUpdated);
};

export const deleteSkillController = async (req: any, res: any) => {
    const { skillId } = req.params;
    const skills = await deleteSkillService(skillId);
    return res.status(200).json(skills);
};