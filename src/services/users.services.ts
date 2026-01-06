import {Types} from "mongoose";
import {User, UserModel} from "../models/users.models";
import jwt from "jsonwebtoken";
import {jwtSecret} from "../configuration/config";

export const getUsersService = async () => {
    return UserModel.find();
};

export const getUserService = async (userId: string) => {
    return UserModel.findById(new Types.ObjectId(userId));
};

// SignUp
export const createUserService = async (newUser: User) => {
    const userToCreate = new UserModel(newUser);
    await userToCreate.save();

    const token = generateToken(userToCreate.id, userToCreate.email, userToCreate.role);

    return [await getUsersService(), token];
};

export const updateUserService = async (userId: string, userToUpdate: User) => {
    await UserModel.updateOne(
        {
            _id: new Types.ObjectId(userId),
        },
        userToUpdate
    );
    return await getUsersService();
};

export const deleteUserService = async (userId: string) => {
    await UserModel.findByIdAndDelete(new Types.ObjectId(userId));
    return await getUsersService();
};


// Login
export const authenticateService = async (username: string, password: string) => {
    const users = await getUsersService();

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        const token = generateToken(user.id, user.email, user.role);
        const { password, ...userWithoutPassword } = user as any;

        return  { ...userWithoutPassword, token };
    }

    return null;
}


export const getUsersWithoutPasswordService = async () => {
    const users = await getUsersService();

    return users.map(user => {
        const { password, ...userWithoutPassword } = user as any;

        return userWithoutPassword;
    })
}

const generateToken = (userId: string, userEmail:string, userRole:string) => {
    return jwt.sign({ sub: userId, email: userEmail, role: userRole }, jwtSecret.secret, {expiresIn: "1h"});
}