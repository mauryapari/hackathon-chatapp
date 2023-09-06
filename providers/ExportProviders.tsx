import React, { FC } from "react";
import { ClerkProvider } from '@clerk/nextjs'
import ConvexClientProvider from "@/providers/ConvexClientProvider";

interface ExportProvidersProps {
    children: React.ReactNode;
}

// Small wrapper for all providers to keep layout.tsx file cleaner
const ExportProviders: FC<ExportProvidersProps> = async ({children}) => {
  return (
     <ClerkProvider>
       <ConvexClientProvider>
            {children}
       </ConvexClientProvider>
     </ClerkProvider>
  );
};

export default ExportProviders;
