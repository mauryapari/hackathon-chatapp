"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { getGroupIdFromPathName } from "@/lib/utils";
import {useQuery} from "convex/react";
import {api} from "@/convex/_generated/api";
import {Id} from "@/convex/_generated/dataModel";
import {useUser} from "@clerk/clerk-react";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
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

  return <>Hello {authUser?.username} and welcome to {group.name}</>;
};

export default Component;
