"use client";

import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import {useUser} from "@clerk/clerk-react";
import useUserEffect from "@/hooks/useUserEffect";

export default function App() {
    useUserEffect()

    const { user} = useUser()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {user ? (
            <div className={"flex justify-around py-20"}>
                <UserButton afterSignOutUrl="/"/>
                <h2 className={"ml-4 text-red-300"}>Hello, {user?.username}</h2>
            </div>
        ) : (
            <div>
                <h2 className={"mb-5 text-purple-400 text-lg"}>Hello, stranger!</h2>
                <Link href={"/sign-in"} className={"hover:text-blue-200"}>PLease Login</Link>
            </div>
        )}
    </main>
  )
}