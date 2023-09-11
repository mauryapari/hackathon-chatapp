"use client"

import React, { FC } from "react";
import GroupSidebar from "@/components/client/GroupSidebar";
import ChatInterface from '../../../components/client/ChatInterface';
import useUserEffect from "@/hooks/useUserEffect";

interface ComponentProps {}

const Component: FC<ComponentProps> = ({}) => {

    useUserEffect()

  const directMessages = ["James", "Charlie", "John"];

  return (
    <div className="h-full w-full flex flex-row">
      <div className="hidden md:flex h-full w-60 z-20 flex-col fixed inset-y-0">
        <GroupSidebar directMessages={directMessages} />
      </div>
      <ChatInterface />
    </div>
  );
};

export default Component;
