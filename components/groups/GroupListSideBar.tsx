"use client";

import React, { FC } from "react";
import { useTheme } from "next-themes";
import { PartialClerkUser } from "@/types";
import Link from "next/link";

interface ComponentProps {
  user: PartialClerkUser | null;
}

const Component: FC<ComponentProps> = async ({ user }) => {
  const { theme } = useTheme();

  const groups = [
    {
      _id: "1",
      name: "Group 1",
      href: "/group/1",
    },
    {
      _id: "2",
      name: "Group 2",
      href: "/group/2",
    },
    {
      _id: "3",
      name: "Group 3",
      href: "/group/3",
    },
  ];

  const hoverCss =
    theme === "dark"
      ? "hover:text-black hover:bg-zinc-200"
      : "hover:text-white hover:bg-zinc-700";

  return (
    <aside className="w-2/12 h-screen p-4">
      <div className="flex flex-col justify-between h-full">
        <div>
          <h2 className="text-lg font-semibold mb-4">
            {user?.username || "Unknown"} Groups
          </h2>
          <ul>
            {groups.map((group) => (
              // eslint-disable-next-line react/jsx-key
              <Link href={group.href} key={group._id}>
                <li
                  key={group._id}
                  className={`flex items-center mb-2 cursor-pointer p-2 rounded transition-colors ${hoverCss}`}
                >
                  <div className="w-8 h-8 rounded-full bg-red mr-2"></div>
                  {/* Circle Icon goes here */}
                  <span className="text-sm">{group.name}</span>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Component;
