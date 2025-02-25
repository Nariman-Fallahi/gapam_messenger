import { Check, CheckCheck } from "lucide-react";

interface MessageProps {
  isSentByUser: boolean;
  isRead: boolean;
}

export default function Message({ isSentByUser, isRead }: MessageProps) {
  return (
    <div className={`flex ${isSentByUser ? "justify-start" : "justify-end"}`}>
      <div
        className={`${
          isSentByUser
            ? "bg-gradient-to-bl from-cyan-600 to-blue-600 rounded-br-sm text-white"
            : "bg-white rounded-bl-sm text-black"
        } p-2 rounded-xl  max-w-[70%]`}
      >
        <p className="text-[15px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam deleniti
          beatae nulla enim quaerat ut dolorum nemo eum sequi quibusdam
          deserunt, voluptate incidunt sint excepturi error porro sit totam non.
        </p>

        <div
          className={`mt-1 flex gap-2 items-center ${
            !isSentByUser && "text-gray-800"
          }`}
        >
          {isRead ? (
            <CheckCheck className="size-4" />
          ) : (
            <Check className="size-4" />
          )}
          <span className="text-[11px]">23:10</span>
        </div>
      </div>
    </div>
  );
}
