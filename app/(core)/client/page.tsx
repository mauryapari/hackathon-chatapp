import React, { FC } from "react";
import {NavbarMinimal} from "@/components/client/SideNavBar";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
  return (
    <div className="flex">
      <div className="w-[100%]">

        <h1>Client Page</h1>
      </div>
    </div>
  );
};

export default Component;
