import './globals.css'

import React from "react";
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ExportProviders from "@/providers/ExportProviders";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Hackathon Chat-client',
  description: 'Create, Connect, Message',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <ExportProviders>
            {children}
        </ExportProviders>
      </body>
    </html>
  )
}
