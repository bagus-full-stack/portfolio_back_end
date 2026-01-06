import {Document, Model, model, Schema, Types} from "mongoose";

export const SkillsSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        level: {
            type: Number,
            required: true
        }
    },
    { versionKey: false}
);

export interface ISkill {
    _id: Types.ObjectId,
    name: string,
    level: number
}

export interface Skill extends Omit<ISkill, "_id">, Document {}

export const SkillModel = model<ISkill, Model<ISkill>>(
    "Skill",
    SkillsSchema,
    "skills"
);