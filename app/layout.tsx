import "./globals.css";

import React from "react";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import ExportProviders from "@/providers/ExportProviders";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Hackathon Chat-client",
  description: "Create, Connect, Message",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${montserrat.className}`}>
        <ExportProviders>{children}</ExportProviders>
      </body>
    </html>
  );
}
