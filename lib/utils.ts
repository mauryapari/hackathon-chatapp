import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getGroupIdFromPathName(pathname: string): string {
  // Regular expression to match /group/:groupId
  const match = pathname.match(/^\/group\/([a-zA-Z0-9_-]+)$/);

  if (match && match[1]) {
    // The group ID is captured in match[1]
    return match[1];
  }

  return "";
}

export function getGroupAndChannelIdFromPathName(pathname: string): { groupId: string; channelId: string } {
  // Regular expression to match /group/:groupId/channel/:channelId
  const match = pathname.match(/^\/group\/([a-zA-Z0-9_-]+)\/channel\/([a-zA-Z0-9_-]+)$/);

  if (match && match[1] && match[2]) {
    // Both group ID and channel ID are captured in match[1] and match[2]
    return { groupId: match[1], channelId: match[2] };
  }

  // Return default values or handle invalid URLs as needed
  return { groupId: "", channelId: "" };
}