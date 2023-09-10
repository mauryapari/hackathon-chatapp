import { Group } from "@/types";
import GroupHeader from "./GroupHeader";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

interface Props {
  group?: Group;
  directMessages?: string[];
}

export default function GroupSidebar({ group, directMessages }: Props) {
  return (
    <div className="flex flex-col h-full text-primary w-full bg-[#2B2D31] light:bg-[#F2F3F5]">
      {group && <GroupHeader group={group} />}
      <h1 className="text-center m-3 bg-gray-600 rounded-sm py-1">
        {group ? "Browse Channels" : "Friends"}
      </h1>

      {group &&
        group.channels.map((channel, index) => {
          return (
            <h1 key={index} className="text-white text-xs my-2 text-center">
              {channel}
            </h1>
          );
        })}

      {directMessages &&
        directMessages.map((message, index) => {
          return (
            <h1 key={index} className="text-white text-xs my-2 text-center">
              {message}
            </h1>
          );
        })}
    </div>
  );
}
