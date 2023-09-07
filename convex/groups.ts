import { mutation, query } from "./_generated/server";
import {v} from "convex/values";
import { get as getUser } from "./users";

export const create = mutation({
    args: {
        name: v.string(),
        description: v.optional(v.string()),
        icon: v.optional(v.string()),
        public: v.boolean(),
        user_clerk_id: v.string(),
    },
    handler: async (ctx, args) => {
        const user = await getUser(ctx, { clerk_user_id: args.user_clerk_id })

        if(!user) return null

        return await ctx.db.insert("groups", {
            name: args.name,
            description: args.description,
            icon: args.icon,
            owner: user._id,
            admins: [],
            mods: [],
            users: [user._id],
            channels: [],
            public: args.public,
            inviteUrl: String(Math.random()).slice(2, 8),
            userLimit: 100,
        })
    }
})

export const getUserGroups = query({
    args: {
        user_clerk_id: v.string(),
        limit: v.optional(v.number()),
    },
    handler: async (ctx, args) => {
        const user = await getUser(ctx, { clerk_user_id: args.user_clerk_id })

        if(!user) return null

        const groups = await ctx.db.query("groups").collect();

        return groups.filter(group => group.users.includes(user._id))
    }
})

export const getGroup = query({
    args: {
        group_id: v.id("groups"),
    },
    handler: async (ctx, args) => {
        return await ctx.db.get(args.group_id)
    }
})