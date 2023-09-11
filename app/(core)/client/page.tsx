"use client"

import React, { FC } from "react";
import GroupSidebar from "@/components/client/GroupSidebar";
import useUserEffect from "@/hooks/useUserEffect";

interface ComponentProps {}

const Component: FC<ComponentProps> = ({}) => {

    useUserEffect()

  const directMessages = ["James", "Charlie", "John"];
  
  return (

    <div className="h-full">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <GroupSidebar directMessages={directMessages} />
      </div>
    </div>
  );
};

export default Component;
