import {Types} from "mongoose";
import {Profile, ProfileModel} from "../models/profiles.models";

export const getProfilesService = async () => {
    return ProfileModel.find();
};

export const getProfileService = async (profileId: string) => {
    return ProfileModel.findById(new Types.ObjectId(profileId));
};

export const createProfileService = async (newProfile: Profile) => {
    const profileToCreate = new ProfileModel(newProfile);
    await profileToCreate.save();

    return getProfilesService();
};

export const updateProfileService = async (profileId: string, profileToUpdate: Profile) => {
    await ProfileModel.updateOne(
        {
            _id: new Types.ObjectId(profileId),
        },
        profileToUpdate
    );
    return await getProfilesService();
};

export const deleteProfileService = async (profileId: string) => {
    await ProfileModel.findByIdAndDelete(new Types.ObjectId(profileId));
    return await getProfilesService();
};