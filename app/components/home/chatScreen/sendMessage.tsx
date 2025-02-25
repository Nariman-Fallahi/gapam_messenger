import { SendHorizontal, Smile } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface SendMessageProps {
  emojiPickerState: "close" | "open" | null;
  setEmojiPickerState: React.Dispatch<
    React.SetStateAction<"close" | "open" | null>
  >;
}

export default function SendMessage({
  emojiPickerState,
  setEmojiPickerState,
}: SendMessageProps) {
  const [value, setValue] = useState("");
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);

  const maxHeight = 80;

  const resizeTextArea = () => {
    if (!textAreaRef.current) {
      return;
    }

    textAreaRef.current.style.height = "auto";
    const newHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = `${Math.min(newHeight, maxHeight)}px`;
    textAreaRef.current.style.overflowY =
      newHeight > maxHeight ? "scroll" : "hidden";
  };

  useEffect(() => {
    resizeTextArea();
    window.addEventListener("resize", resizeTextArea);
    return () => window.removeEventListener("resize", resizeTextArea);
  }, []);

  const toggleEmojiPicker = () => {
    switch (emojiPickerState) {
      case null:
        setEmojiPickerState("open");
        break;
      case "open":
        setEmojiPickerState("close");
        break;
      case "close":
        setEmojiPickerState("open");
        break;
    }
  };

  return (
    <div className="w-full p-[6px] pb-0 flex gap-2 items-center">
      <div className="w-fit">
        <button className="size-10 flex items-center justify-center rounded-full bg-white/95 active:scale-98">
          <SendHorizontal className="size-[21px] text-cyan-700" />
        </button>
      </div>

      <div className="w-full flex items-end bg-white shadow rounded-lg">
        <textarea
          className="w-full outline-none text-sm p-2 resize-none transition-all duration-400"
          maxLength={500}
          ref={textAreaRef}
          rows={1}
          onChange={(e) => {
            setValue(e.target.value);
            resizeTextArea();
          }}
          value={value}
          placeholder="پیام"
        />

        <button className="p-2" onClick={toggleEmojiPicker}>
          <Smile className="size-[22px] text-gray-600" />
        </button>
      </div>
    </div>
  );
}
