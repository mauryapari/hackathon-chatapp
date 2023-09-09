import React, { FC } from "react";
import {NavbarMinimal} from "@/components/client/SideNavBar";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
  return (
    <div className="flex">
        <h1>Client Page</h1>
    </div>
  );
};

export default Component;
