import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
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
    const user = await getUser(ctx, { clerk_user_id: args.user_clerk_id });

    if (!user) return null;

    const groupID = await ctx.db.insert("groups", {
      name: args.name,
      description: args.description,
      icon: args.icon ?? "https://cdn.discordapp.com/embed/avatars/0.png",
      owner: user._id,
      admins: [user._id],
      mods: [],
      users: [user._id],
      channels: [],
      public: args.public,
      inviteUrl: String(Math.random()).slice(2, 8),
      userLimit: 100,
    });

    await ctx.db.patch(user?._id, { groups: [...user.groups, groupID] });
  },
});

export const getUserGroups = query({
  args: {
    user_clerk_id: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await getUser(ctx, { clerk_user_id: args.user_clerk_id });

    if (!user) return []

    if (args.limit) {
      const groups = await ctx.db.query("groups").take(args.limit)
      return groups.filter((group) => group.users.includes(user._id)) ?? []
    }

    const groups = await ctx.db.query("groups").collect();
    return groups.filter((group) => group.users.includes(user._id)) ?? []
  },
});

// Returns a minimal version of the group to render in the sidebar and reduce load times
export const getUserGroupsMinimal = query({
  args: {
    user_clerk_id: v.string(),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const user = await getUser(ctx, { clerk_user_id: args.user_clerk_id });

    if (!user) return []

    if (args.limit) {
      const groups = await ctx.db.query("groups").take(args.limit)
      return groups.filter((group) => group.users.includes(user._id)).map((g) => {
        return {
          _id: g._id,
          name: g.name,
          icon: g.icon,
        }
      }) ?? []
    }

    const groups = await ctx.db.query("groups")
        .filter((q) => q.eq(q.field("users"), [user._id]))
        .collect();

    return groups.map((g) => {
      return {
        _id: g._id,
        name: g.name,
        icon: g.icon,
      }
    }) ?? []
  },
});

export const getGroup = query({
  args: {
    group_id: v.id("groups"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.group_id);
  },
});

export const getGroupChannels = query({
    args: {
        ids: v.array(v.id("groupChannels")),
    },
    handler: async (ctx, args) => {
        const group_channels = []

        for (const id of args.ids) {
            const channel = await ctx.db.get(id)
            group_channels.push(channel)
        }

        return group_channels
    }
})
