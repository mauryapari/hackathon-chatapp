import ChatDialogue from "./chatInterface/ChatDialogue";
import ChatInput from "./chatInterface/ChatInput";

export default function ChatInterface() {
  return (
    <div className="text-white md:ml-60 h-screen w-full flex flex-col bg-[#35373b]">
      <ChatDialogue />
      <ChatInput />
    </div>
  );
}
