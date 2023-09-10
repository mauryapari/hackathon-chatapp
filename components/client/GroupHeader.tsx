"use client";
import Image from "next/image";
import { useState } from "react";
import { Group } from "@/types";
import {
  Navbar,
  Center,
  Tooltip,
  UnstyledButton,
  createStyles,
  Stack,
  rem,
  Badge,
  Menu,
} from "@mantine/core";

interface Props {
  group: Group;
}

export default function GroupHeader({ group }: Props) {

  return (
    <>
      <div className="text-white flex flex-row items-center justify-between px-6 h-14 border-b border-slate-950">
        {group.name}
        <Center className="relative">
          <Menu
            transitionProps={{ transition: "slide-left" }}
            position="bottom-start"
            width={220}
          >
            <Menu.Target>
              <Image
                src="/down-arrow.svg"
                alt="down arrow"
                width={20}
                height={20}
              />
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>Server Boost</Menu.Item>
              <Menu.Item>Invite People</Menu.Item>
              <Menu.Item>App Directory</Menu.Item>
              <Menu.Item>Show All Channels</Menu.Item>
              <Menu.Item>Notification Settings</Menu.Item>
              <Menu.Item>Privacy settings</Menu.Item>
              <Menu.Item>Edit Server Profile</Menu.Item>
              <Menu.Item className="text-red">Leave server</Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Center>
      </div>
    </>
  );
}
