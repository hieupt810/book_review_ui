import { FC } from "react";
import {
  BookOpenCheck,
  Home,
  BookMarked,
  Timer,
  Settings,
  Menu,
} from "lucide-react";

interface NavLeftProps {}

const NavLeft: FC<NavLeftProps> = ({}) => {
  return (
    <div className="w-20 h-full border-r-2 border-gray-300 flex flex-col justify-between items-center font-normal text-sm text-gray-900">
      <div className="py-2">
        <BookOpenCheck />
      </div>
      <div className="flex flex-col gap-y-4">
        <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
          <Home />
        </button>
        <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
          <BookMarked />
        </button>
        <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
          <Timer />
        </button>
        <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
          <Settings />
        </button>
      </div>
      <button className="p-2 cursor-pointer hover:bg-[#C9C39F] rounded-full">
        <Menu />
      </button>
    </div>
  );
};

export default NavLeft;
