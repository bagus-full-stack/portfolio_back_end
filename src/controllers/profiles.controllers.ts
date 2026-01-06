import {createProfileService, deleteProfileService, getProfileService, getProfilesService, updateProfileService} from "../services/profiles.services";

export const getProfilesController = async (req: any, res: any) => {
    const profiles = await getProfilesService();
    return res.status(200).json(profiles);
};

export const getProfileController = async (req: any, res: any) => {
    const { profileId } = req.params;
    const profile = await getProfileService(profileId);
    return res.status(200).json(profile);
};

export const createProfileController = async (req: any, res: any) => {
    const profiles = await createProfileService(req.body);
    return res.status(201).json(profiles);
};

export const updateProfileController = async (req: any, res: any) => {
    const { profileId } = req.params;
    const profileUpdated = await updateProfileService(profileId, req.body);
    return res.status(200).json(profileUpdated);
};

export const deleteProfileController = async (req: any, res: any) => {
    const { profileId } = req.params;
    const profiles = await deleteProfileService(profileId);
    return res.status(200).json(profiles);
};