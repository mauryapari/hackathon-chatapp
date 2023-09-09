import React from "react";
import { NavbarMinimal } from "@/components/client/SideNavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <NavbarMinimal />
      {children}
    </div>
  );
}
