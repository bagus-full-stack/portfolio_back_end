import {Types} from "mongoose";
import {Experience, ExperienceModel} from "../models/experiences.models";

export const getExperiencesService = async () => {
    return ExperienceModel.find();
};

export const getExperienceService = async (experienceId: string) => {
    return ExperienceModel.findById(new Types.ObjectId(experienceId));
};

export const createExperienceService = async (newExperience: Experience) => {
    const experienceToCreate = new ExperienceModel(newExperience);
    await experienceToCreate.save();

    return getExperiencesService();
};

export const updateExperienceService = async (experienceId: string, experienceToUpdate: Experience) => {
    await ExperienceModel.updateOne(
        {
            _id: new Types.ObjectId(experienceId),
        },
        experienceToUpdate
    );
    return await getExperiencesService();
};

export const deleteExperienceService = async (experienceId: string) => {
    await ExperienceModel.findByIdAndDelete(new Types.ObjectId(experienceId));
    return await getExperiencesService();
};