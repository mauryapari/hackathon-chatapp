import React, { FC } from "react";
import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from "@/providers/ConvexClientProvider";
import {ThemeProvider} from "@/providers/ThemeProvider";

interface ExportProvidersProps {
    children: React.ReactNode;
}

// Small wrapper for all providers to keep layout.tsx file cleaner
const ExportProviders: FC<ExportProvidersProps> = async ({children}) => {
  return (
     <ClerkProvider afterSignUpUrl={"/client"} afterSignInUrl={"/client"}>
       <ConvexClientProvider>
            <ThemeProvider>
                {children}
            </ThemeProvider>
       </ConvexClientProvider>
     </ClerkProvider>
  );
};

export default ExportProviders;
