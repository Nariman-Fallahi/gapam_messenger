import { ArrowRight, SendHorizontal, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Spinner from "../ui/spinner";

const EmojiPicker = lazy(() => import("emoji-picker-react"));

export default function ChatScreen() {
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

  return (
    <div className="w-full flex flex-col h-screen">
      <div className="relative w-full h-full mx-auto flex-col bg-blue-500">
        <div className="w-full flex fixed justify-between items-center p-2 h-13 shadow px-3 bg-white/95">
          <div className="flex gap-4 items-center">
            <ArrowRight className="size-[22px] text-gray-600" />

            <Avatar className="size-9 md:size-10 lg:size-11">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>

            <div className="flex flex-col">
              <p className="text-[13.5px] font-medium line-clamp-1 md:text-[14px] lg:text-[15px]">
                نیملن فلاحی
              </p>
              <p className="text-xs mt-[2px] text-blue-600">انلاین</p>
            </div>
          </div>

          <Trash className="size-5 text-gray-600" />
        </div>

        <div className="absolute bottom-0 w-full p-2 flex gap-2 items-center ">
          <div className="w-fit">
            <button className="size-10 flex items-center justify-center rounded-full bg-white/95">
              <SendHorizontal className="size-[21px] text-cyan-700" />
            </button>
          </div>

          <div className="w-full flex items-center bg-white/95 shadow rounded-lg">
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
            />
          </div>
        </div>
      </div>

      <div className="h-55">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <Spinner className="size-7" />
            </div>
          }
        >
          {/* <EmojiPicker
            searchDisabled
            skinTonesDisabled
            lazyLoadEmojis
            width="100%"
            height="100%"
          /> */}
        </Suspense>
      </div>
    </div>
  );
}
