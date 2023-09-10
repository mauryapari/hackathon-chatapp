import React, { FC } from "react";
import { NavbarMinimal } from "@/components/client/SideNavBar";
import GroupSidebar from "@/components/client/GroupSidebar";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
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
