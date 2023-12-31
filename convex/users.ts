import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

/**
 * Store a user if it doesn't exist, or get the user's ID if it does.
 */
export const store = mutation({
  args: {
    clerk_user_id: v.string(),
  },
  handler: async ({ db }, args) => {
    const user = await db
      .query("users")
      .withIndex("by_clerk_id", (q) =>
        q.eq("clerk_user_id", args.clerk_user_id),
      )
      .unique();

    if (user !== null) {
      return user._id;
    }

    return await db.insert("users", {
      clerk_user_id: args.clerk_user_id,
      directChannels: [],
      groups: [],
      status: "online",
      friends: [],
      friendRequests: [],
    });
  },
});

export const get = query({
  args: {
    clerk_user_id: v.string(),
  },
  handler: async ({ db }, args) => {
    return await db
      .query("users")
      .withIndex("by_clerk_id", (q) =>
        q.eq("clerk_user_id", args.clerk_user_id),
      )
      .unique();
  },
});

export const changeStatus = mutation({
  args: {
    clerk_user_id: v.string(),
    newStatus: v.union(
        v.literal("online"),
        v.literal("idle"),
        v.literal("dnd"),
        v.literal("offline"),
    )
  },
  handler: async (ctx, args) => {
    const user = await get(ctx, args);

    if (user === null) {
      throw new Error("User not found");
    }

    await ctx.db.patch(user._id, {
      status: args.newStatus
    });
  }
})