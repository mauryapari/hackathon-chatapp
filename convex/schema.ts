import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    // After auth, clerk gives all users an ID, which will always be available (unless the user is deleted)
    clerk_user_id: v.string(),
    // A list of the user's group dms
    directChannels: v.array(v.id("directChannels")),
    // A list of the user's groups
    groups: v.array(v.id("groups")),
    status: v.optional(
      v.union(
        v.literal("online"),
        v.literal("idle"),
        v.literal("dnd"),
        v.literal("offline"),
      ),
    ),
  }).index("by_clerk_id", ["clerk_user_id"]),
  groups: defineTable({
    // The group's name
    name: v.string(),
    // The group's description
    description: v.optional(v.string()),
    // The group's icon
    icon: v.string(),
    // The group's owner
    owner: v.id("users"),
    // The group's admins
    admins: v.array(v.id("users")),
    // The group's moderators
    mods: v.array(v.id("users")),
    // The group's members
    users: v.array(v.id("users")),
    // The group's channels
    channels: v.array(v.id("groupChannels")),
    // Whether the group is public
    public: v.boolean(),
    // The group's invite URL
    inviteUrl: v.string(),
    // Group user limit
    userLimit: v.optional(v.number()),
  }).index("by_invite_url", ["inviteUrl"]),
  groupChannels: defineTable({
    // The group the channel is in
    name: v.string(),
    // The channel's description
    description: v.optional(v.string()),
    // The channel's messages
    messages: v.array(v.id("groupMessages")),
  }),
  groupMessages: defineTable({
    // The user who sent the message
    user: v.id("users"),
    // The channel the message is in
    channel: v.id("groupChannels"),
    // The message content
    content: v.string(),
  }),
  directMessages: defineTable({
    // The user who sent the message
    user: v.id("users"),
    // The channel the direct message is in
    channel: v.id("directChannels"),
    // The message content
    content: v.string(),
  })
    .index("by_user", ["user"])
    .index("by_channel", ["channel"]),
  directChannels: defineTable({
    // The users in the channel
    user: v.array(v.id("users")),
    // The messages in the channel
    messages: v.array(v.id("directMessages")),
  }).index("by_user", ["user"]),
});
