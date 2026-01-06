import {Document, Model, model, Schema, Types} from "mongoose";

export const EducationsSchema: Schema = new Schema(
    {
        degree: {
            type: String,
            required: true
        },
        institution: {
            type: String,
            required: true
        },
        period: {
            type: String,
            required: true
        },
        place: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    { versionKey: false}
);

export interface IEducation {
    _id: Types.ObjectId,
    degree: string,
    institution: string,
    period: string,
    place: string,
    description: string
}

export interface Education extends Omit<IEducation, "_id">, Document {}

export const EducationModel = model<IEducation, Model<IEducation>>(
    "Education",
    EducationsSchema,
    "educations"
);