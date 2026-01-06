import {Types} from "mongoose";
import {Skill, SkillModel} from "../models/skills.models";

export const getSkillsService = async () => {
    return SkillModel.find();
};

export const getSkillService = async (skillId: string) => {
    return SkillModel.findById(new Types.ObjectId(skillId));
};

export const createSkillService = async (newSkill: Skill) => {
    const skillToCreate = new SkillModel(newSkill);
    await skillToCreate.save();

    return getSkillsService();
};

export const updateSkillService = async (skillId: string, skillToUpdate: Skill) => {
    await SkillModel.updateOne(
        {
            _id: new Types.ObjectId(skillId),
        },
        skillToUpdate
    );
    return await getSkillsService();
};

export const deleteSkillService = async (skillId: string) => {
    await SkillModel.findByIdAndDelete(new Types.ObjectId(skillId));
    return await getSkillsService();
};