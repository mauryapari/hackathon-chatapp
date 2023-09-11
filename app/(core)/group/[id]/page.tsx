"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { getGroupIdFromPathName } from "@/lib/utils";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {useUser} from "@clerk/clerk-react";
import GroupSidebar from "@/components/client/GroupSidebar";
import ChatInterface from "@/components/client/ChatInterface";

interface ComponentProps {}

const Component: FC<ComponentProps> = ( ) => {
  const pathname = usePathname();
  const groupId = getGroupIdFromPathName(pathname);
  const authUser = useUser()

  // todo - Search convex to see if this group exists and the user is a member
  // todo - if so, render the group page and channels.


  const group = useQuery(api.groups.getGroup, {
    group_id: groupId as Id<"groups">
  })

  const groupChannels = useQuery(api.groups.getGroupChannels, {
     ids: group ? group.channels : []
  })

    const groupChannelData = groupChannels ? groupChannels.map(channel => {
        return {
            _id: channel!._id,
            name: channel!.name
        }
    }) : []

  if(authUser.isLoaded && !group) {
    return <div>Group not found</div>
  }

  return (
    <div className="h-full w-full flex flex-row">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <GroupSidebar group={group as any} groupChannels={groupChannelData}/>
      </div>
      <ChatInterface />
    </div>
  )
};

export default Component;
