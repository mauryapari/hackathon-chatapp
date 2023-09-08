"use client";

import React, { FC } from "react";
import { MantineProvider } from "@mantine/core";
import {useTheme} from "next-themes";

interface ComponentProps {
  children: React.ReactNode;
}

const Component: FC<ComponentProps> = ({ children }) => {
  const { theme } = useTheme()

  return <MantineProvider theme={{ colorScheme: theme ?? "dark" as any}}>{children}</MantineProvider>;
};

export default Component;
