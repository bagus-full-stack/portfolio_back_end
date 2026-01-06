import {Document, Model, model, Schema, Types} from "mongoose";
import {Skill} from "./skills.models";

export const ProfilesSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        lastname: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        designation: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        address: {
            type: String
        },
        resume: {
            type: String,
            required: true
        },
        github: {
            type: String,
            required: true
        },
        linkedIn: {
            type: String,
            required: true
        },
        twitter: {
            type: String,
            required: true
        }
    },
    { versionKey: false}
);

export interface IProfile {
    _id: Types.ObjectId,
    username: string,
    lastname: string,
    firstname: string,
    jobs: [string],
    designation: string,
    description: string,
    email: string,
    phone: string,
    address: string,
    resume: string,
    github: string,
    linkedIn: string,
    twitter: string
}

export interface Profile extends Omit<IProfile, "_id">, Document {}

export const ProfileModel = model<IProfile, Model<IProfile>>(
    "Profile",
    ProfilesSchema,
    "profiles"
);