"use client";

import React, { FC } from "react";
import { MantineProvider } from "@mantine/core";

interface ComponentProps {
  children: React.ReactNode;
}

const Component: FC<ComponentProps> = ({ children }) => {
  return <MantineProvider>{children}</MantineProvider>;
};

export default Component;
