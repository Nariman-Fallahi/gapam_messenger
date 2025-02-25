import { ArrowRight, Trash } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";

export default function Header() {
  return (
    <div className="w-full flex justify-between items-center p-2 h-13 shadow px-3 bg-white z-10">
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
  );
}
