import React, { FC } from "react";
import Link from "next/link";

interface ComponentProps {}

const Component: FC<ComponentProps> = ({}) => {
    return (
        <section className="py-16 text-center">
            <h1 className="text-4xl font-bold">Welcome to Your Chat App</h1>
            <p className="mt-4 text-lg">Connect, chat, and collaborate with ease.</p>
            <div className="mt-8">
                <Link href={"/sign-up"}>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full mr-4">
                        Sign Up
                    </button>
                </Link>
                <Link href={"/sign-in"}>
                    <button className="bg-transparent border border-red-500 hover:bg-red-600 font-semibold py-2 px-4 rounded-full">
                        Log In
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default Component;
