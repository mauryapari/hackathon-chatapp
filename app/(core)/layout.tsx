import React from "react";
import {NavbarMinimal} from "@/components/client/SideNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <>
            {children}
        <NavbarMinimal />
        </>
  );
}
