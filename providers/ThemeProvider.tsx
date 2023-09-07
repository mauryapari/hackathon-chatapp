'use client'

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
type ThemeProviderProps = Parameters<typeof NextThemesProvider>[0]

/**
 * Your client's theme provider component.
 * 'use client' is essential for next-themes to work with client-dir.
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}