"use client"

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { NavigationProgress, nprogress } from '@mantine/nprogress';

// Todo - make this work
export function RouterTransition() {
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const url = `${pathname}?${searchParams}`

    useEffect(() => {
        const handleStart = (_url: string) => _url !== url && nprogress.start();
        const handleComplete = () => nprogress.complete();
    }, [url]);

    return <NavigationProgress autoReset={true} />;
}