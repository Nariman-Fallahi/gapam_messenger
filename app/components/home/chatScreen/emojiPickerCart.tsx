import { lazy, Suspense } from "react";
import Spinner from "~/components/ui/spinner";

const EmojiPicker = lazy(() => import("emoji-picker-react"));

interface EmojiPickerProps {
  emojiPickerState: "close" | "open" | null;
}

export default function EmojiPickerCart({
  emojiPickerState,
}: EmojiPickerProps) {
  return (
    <div
      className={`${
        emojiPickerState === "open"
          ? "openEmoji"
          : emojiPickerState === "close"
          ? "closeEmoji"
          : "hidden"
      } relative mt-2`}
    >
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
  );
}
