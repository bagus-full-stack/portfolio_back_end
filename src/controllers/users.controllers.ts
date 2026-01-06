import {
    authenticateService,
    createUserService,
    deleteUserService,
    getUserService,
    getUsersService, getUsersWithoutPasswordService,
    updateUserService
} from "../services/users.services";

export const getUsersController = async (req: any, res: any) => {
    const users = await getUsersService();
    return res.status(200).json(users);
};

export const getUserController = async (req: any, res: any) => {
    const { userId } = req.params;
    const user = await getUserService(userId);
    return res.status(200).json(user);
};

export const createUserController = async (req: any, res: any) => {
    const users = await createUserService(req.body);
    return res.status(201).json(users);
};

export const updateUserController = async (req: any, res: any) => {
    const { userId } = req.params;
    const userUpdated = await updateUserService(userId, req.body);
    return res.status(200).json(userUpdated);
};

export const deleteUserController = async (req: any, res: any) => {
    const { userId } = req.params;
    const users = await deleteUserService(userId);
    return res.status(200).json(users);
};

export const authenticateController = async (req: any, res: any) => {
    const {username, password} = req.body;
    const data = await authenticateService(username, password);

    if (!data) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    return res.status(200).json(data);
}

export const getUsersWithoutPasswordController = async (req: any, res: any) => {
    const data = await getUsersWithoutPasswordService();

    return res.status(200).json(data);
}
