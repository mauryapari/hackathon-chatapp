import React, { FC } from "react";
import { NavbarMinimal } from "@/components/client/SideNavBar";
import GroupSidebar from "@/components/client/GroupSidebar";
import ChatInterface from '../../../components/client/ChatInterface';

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
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
