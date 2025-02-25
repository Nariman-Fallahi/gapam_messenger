import { Menu, Search } from "lucide-react";
import { paths } from "./paths";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

export default function Header() {
  return (
    <div className="w-full flex p-3">
      <div className="flex w-full justify-between gap-2 items-center">
        <DropdownMenu dir="rtl">
          <DropdownMenuTrigger asChild>
            <button className="flex items-center justify-center rounded-full size-9  p-2 outline-none hover:bg-gray-200 active:scale-95 bg-gray-100 transition-all duration-400 cursor-pointer">
              <Menu />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="translate-[-5px] mt-2 md:mt-3 md:translate-[-7px]">
            {paths.map((route) => (
              <DropdownMenuItem key={route.id} className="mt-2 cursor-pointer">
                <div className="w-full flex justify-between gap-8">
                  <span className="lg:text-base">{route.title}</span>
                  <route.icon className="size-5 lg:size-[22px]" />
                </div>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center border p-[6px] px-3 rounded-full gap-2 w-full lg:p-2 lg:px-4">
          <input
            type="text"
            name=""
            id=""
            className="w-full border-none outline-none text-[14.5px] lg:text-base"
            placeholder="جستجو"
          />
          <Search className="text-gray-700" />
        </div>
      </div>
    </div>
  );
}
