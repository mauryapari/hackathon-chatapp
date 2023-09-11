"use client";

import React, { FC, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getGroupIdFromPathName } from "@/lib/utils";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {useUser} from "@clerk/clerk-react";
import GroupSidebar from "@/components/client/GroupSidebar";
import ChatInterface from "@/components/client/ChatInterface";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({children}:{children: React.ReactNode}) => {
  const pathname = usePathname();
  const groupId = getGroupIdFromPathName(pathname);
  const authUser = useUser().user

  // todo - Search convex to see if this group exists and the user is a member
  // todo - if so, render the group page and channels.

  
  const group = await useQuery(api.groups.getGroup, {
    group_id: groupId as Id<"groups">
  })

  if(!group) {
    return <>This group could not be found, please try again!</>
  }

  return (
    <div className="h-full w-full flex flex-row">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <GroupSidebar group={group}/>
      </div>
      <ChatInterface />
    </div>
  )
  
  
  // <>Hello {authUser?.username} and welcome to {group.name}</>;
};

export default Component;
