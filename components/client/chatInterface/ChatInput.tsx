"use client";

import { Plus } from "lucide-react";
import { EmojiPicker } from "./EmojiPicker";
import { useState } from "react";

interface ChatInputProps {
  apiUrl: string;
  name: string;
  type: "directMessage" | "channel";
}

export default function ChatInput() {
  const [inputValue, setInputValue] = useState("");

  // Function to update the input value when an emoji is selected
  const handleEmojiSelection = (emoji: string) => {
    setInputValue((prevValue) => prevValue + " " + emoji);
  };
  return (
    <div className="w-full px-6 flex flex-row items-center justify-center my-6">
      <button className="rounded-full bg-zinc-500 h-8 w-8 flex items-center justify-center mr-2">
        <Plus className="text-white dark:text-[#313338] " />
      </button>
      <input
        type="text"
        placeholder="Message (channel name)"
        className="w-full rounded-md h-10 outline-none pl-2 bg-[#3e4045] mr-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update input value
      />
      <EmojiPicker onChange={handleEmojiSelection} />
    </div>
  );
}
