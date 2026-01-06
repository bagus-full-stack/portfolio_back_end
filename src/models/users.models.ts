import {Document, Model, model, Schema, Types} from "mongoose";

export const UsersSchema: Schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            trim: true
        },
        lastname: {
            type: String,
            required: true,
            trim: true
        },
        firstname: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        role: {
            type: String,
            required: true,
            trim: true
        }
    },
    { versionKey: false}
);

export interface IUser {
    _id: Types.ObjectId,
    username: string,
    password: string,
    lastname: string,
    firstname: string,
    email: string,
    role: string
}

export interface User extends Omit<IUser, "_id">, Document {}


export const UserModel = model<IUser, Model<IUser>>(
    "User",
    UsersSchema,
    "users"
);