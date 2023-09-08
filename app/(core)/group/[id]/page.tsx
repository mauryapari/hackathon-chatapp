"use client";

import React, { FC } from "react";
import { usePathname } from "next/navigation";
import { getGroupIdFromPathName } from "@/lib/utils";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
  const pathname = usePathname();

  const groupId = getGroupIdFromPathName(pathname);

  console.log(`Group ID: ${groupId}`);

  // todo - Search convex to see if this group exists and the user is a member
  // todo - if so, render the group page and channels.

  return <>Group Page</>;
};

export default Component;
