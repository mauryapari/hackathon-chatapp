import {Id} from "@/convex/_generated/dataModel";

export type PartialClerkUser =
    | {
    readonly id: string;
    readonly primaryEmailAddress: PartialClerkEmail | null;
    readonly username: string | null;
    readonly fullName: string | null;
    readonly firstName: string | null;
    readonly lastName: string | null;
    readonly imageUrl: string;
    readonly hasImage: boolean;
    readonly hasVerifiedEmailAddress: boolean;
}
    | undefined;

type PartialClerkEmail = {
    readonly id: string;
    readonly emailAddress: string;
};

export enum UserLimits {
    MAX_DIRECT_CHANNELS = 100,
    MAX_GROUPS = 25,
}

export enum GroupLimits {
    MAX_MEMBERS = 1000,
}

// Mapped from our convex schema
export type Group = {
    readonly _id: Id<"groups">
    readonly _creationTime: number
    readonly name: string
    readonly description: string | undefined
    readonly icon: string | undefined
    readonly owner: Id<"users">
    readonly admins: Id<"users">[]
    readonly mods: Id<"users">[]
    readonly users: Id<"users">[]
    readonly channels: Id<"groupChannels">[]
    readonly public: boolean
    readonly inviteUrl: string
    readonly userLimit: number | undefined
}