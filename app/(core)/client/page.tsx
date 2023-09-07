import React, { FC } from "react";
import GroupListSideBar from "@/components/groups/GroupListSideBar";
import {currentUser} from "@clerk/nextjs";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {

    const user = await currentUser()

  return (
    <>
        <GroupListSideBar user={user as any}/>
    </>
  );
};

export default Component;
