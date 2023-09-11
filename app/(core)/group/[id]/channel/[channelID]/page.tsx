"use client"

import {FC} from "react";
import {usePathname} from "next/navigation";
import {getGroupAndChannelIdFromPathName} from "@/lib/utils";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
  const pathname = usePathname()

  const { channelId } = getGroupAndChannelIdFromPathName(pathname)

  return (
    <>
      Welcome to channel: {channelId}
    </>
  );
};

export default Component;
