import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";

interface ComponentProps {}

const Component: FC<ComponentProps> = async ({}) => {
  const authUser = await currentUser();

  return (
    <section className="container py-16">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-6xl font-extrabold">Welcome to ChatSync</h1>
          <p className="mt-4 text-xl">
            Connect, chat, and collaborate with ease.
          </p>
          <div className="mt-8">
            {authUser ? (
              <Link
                href={"/client"}
                className="bg-red hover:bg-background hover:text-primary border hover:border-red text-white font-semibold py-3 px-6 rounded-full"
              >
                {" "}
                Welcome back{" "}
              </Link>
            ) : (
              <div>
                <Link
                  href={"/sign-up"}
                  className="bg-red hover:bg-background hover:text-primary border hover:border-red text-white font-semibold py-3 px-6 rounded-full mr-4"
                >
                  Sign Up
                </Link>
                <Link
                  href={"/sign-in"}
                  className="bg-transparent border border-red hover:bg-red font-semibold py-3 px-6 rounded-full"
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
        <Image
          src="/hero_banner_image_red.svg"
          alt="Hero banner image"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Component;
