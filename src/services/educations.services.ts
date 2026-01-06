import {Types} from "mongoose";
import {Education, EducationModel} from "../models/educations.models";

export const getEducationsService = async () => {
    return EducationModel.find();
};

export const getEducationService = async (educationId: string) => {
    return EducationModel.findById(new Types.ObjectId(educationId));
};

export const createEducationService = async (newEducation: Education) => {
    const educationToCreate = new EducationModel(newEducation);
    await educationToCreate.save();

    return getEducationsService();
};

export const updateEducationService = async (educationId: string, educationToUpdate: Education) => {
    await EducationModel.updateOne(
        {
            _id: new Types.ObjectId(educationId),
        },
        educationToUpdate
    );
    return await getEducationsService();
};

export const deleteEducationService = async (educationId: string) => {
    await EducationModel.findByIdAndDelete(new Types.ObjectId(educationId));
    return await getEducationsService();
};