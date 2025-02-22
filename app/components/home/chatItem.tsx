import { Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "../ui/context-menu";

export default function ChatItem() {
  return (
    <ContextMenu dir="rtl">
      <ContextMenuTrigger>
        <div className="w-full flex items-center gap-4 pr-2 pt-2 select-none active:bg-gray-50 cursor-pointer hover:bg-gray-100 rounded-tl-sm">
          <Avatar className="size-10 md:size-11 lg:size-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className="w-full flex flex-col pb-3">
            <div className="w-full flex justify-between items-center">
              <p className="text-[14.5px] font-medium line-clamp-1 md:text-[15px] lg:text-base">
                lo
              </p>
              <p className="text-[10px] relative left-2 text-gray-700 md:text-[10.8px] lg:text-[11px]">
                13:49
              </p>
            </div>

            <div className="w-full flex justify-between items-center">
              <p className="mt-1 text-[12.5px] line-clamp-1 text-gray-700 md:text-[13px] lg:text-sm ml-5">
                سلام اقا  خوبی چطوری حالت چطوره؟
                سلام اقا  خوبی چطوری حالت چطوره؟
                سلام اقا  خوبی چطوری حالت چطوره؟
              </p>

              <div className="size-[22px] text-[10.5px] bg-gray-300 rounded-full flex items-center justify-center p-2 left-2 relative lg:size-6 lg:text-xs">
                8
              </div>
            </div>
          </div>
        </div>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-50">
        <ContextMenuItem>
          <div className="w-full flex justify-between text-red-700">
            <span>حذف گفتگو</span>
            <Trash className="size-5 text-red-700" />
          </div>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
