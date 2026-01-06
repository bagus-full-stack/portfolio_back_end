import {Document, Model, model, Schema, Types} from "mongoose";

export const ExperiencesSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        company: {
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
        },
    },
    { versionKey: false}
);

export interface IExperience {
    _id: Types.ObjectId,
    title: string,
    company: string,
    period: string,
    place: string,
    description: string
}

export interface Experience extends Omit<IExperience, "_id">, Document {}

export const ExperienceModel = model<IExperience, Model<IExperience>>(
    "Experience",
    ExperiencesSchema,
    "experiences"
);