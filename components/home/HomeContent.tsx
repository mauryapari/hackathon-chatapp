import React, { FC } from "react";
import HomeHero from "@/components/home/HomeHero";
import { TiGroup } from "react-icons/ti";
import { BiSolidMessageDots } from "react-icons/bi";

interface ComponentProps {}

const Component: FC<ComponentProps> = ({}) => {
  return (
    <>
      <HomeHero />
      <section className="container my-11 py-11 text-center">
        <div>
          <h2 className="text-5xl font-medium pb-6">Amazing Features</h2>
          <p className="mx-auto w-[70%] text-base leading-8">
            Features that every person needs! Whether you want to send a 1:1
            message, talk in a group, message to bulk, meet securely, and do
            more. All kinds of team collaboration use cases are covered in this
            chat app!
          </p>
          <div className="flex mt-32 gap-x-8">
            <div className="basis-[50%] flex flex-col items-center border-4 border-muted p-12">
              <BiSolidMessageDots size="120px" className="pb-6" />
              <p>
                Send your work requirements to your co-worker through a quick
                one-to-one instant chat app.
              </p>
            </div>
            <div className="basis-[50%] flex flex-col items-center border-4 border-muted p-12">
              <TiGroup size="120px" className="pb-6" />
              <p>
                Collaborate in group chats to discuss your daily office work
                routines! Be a part of the group to access all files and
                conversations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Component;
