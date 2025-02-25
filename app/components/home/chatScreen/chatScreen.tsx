import { useState } from "react";
import Header from "./header";
import Message from "./message";
import SendMessage from "./sendMessage";
import EmojiPickerCart from "./emojiPickerCart";

export default function ChatScreen() {
  const [emojiPickerState, setEmojiPickerState] = useState<
    "open" | "close" | null
  >(null);

  return (
    <div className="relative w-full h-screen mx-auto flex-col bg-gray-500 overflow-hidden">
      <Header />

      <div
        className={`w-full relative p-2 flex flex-col gap-2 overflow-y-auto ${
          emojiPickerState === "open" ? "h-[50vh]" : "h-[calc(99vh-100px)]"
        } transition-all duration-300`}
      >
        <Message isSentByUser isRead />
        <Message isSentByUser isRead />
        <Message isSentByUser={false} isRead={false} />
      </div>

      <SendMessage
        emojiPickerState={emojiPickerState}
        setEmojiPickerState={setEmojiPickerState}
      />

      <EmojiPickerCart emojiPickerState={emojiPickerState} />
    </div>
  );
}
