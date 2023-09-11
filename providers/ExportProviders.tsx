import React, { FC } from "react";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import MantineProviderClient from "@/providers/MantineProviderClient";

interface ExportProvidersProps {
  children: React.ReactNode;
}

// Small wrapper for all providers to keep layout.tsx file cleaner
const ExportProviders: FC<ExportProvidersProps> = ({ children }) => {
  return (
    <ClerkProvider afterSignUpUrl={"/client"} afterSignInUrl={"/client"}>
      <ConvexClientProvider>
        <ThemeProvider>
          <MantineProviderClient>
              {children}
          </MantineProviderClient>
        </ThemeProvider>
      </ConvexClientProvider>
    </ClerkProvider>
  );
};

export default ExportProviders;
