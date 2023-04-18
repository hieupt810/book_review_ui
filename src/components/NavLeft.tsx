import { AiOutlineAlignLeft } from "react-icons/ai";
import { BiHomeAlt2 } from "react-icons/bi";
import { BsBook, BsBookmark } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiTimer } from "react-icons/tfi";
import { useRouter } from "next/router";

export default function NavLeft() {
  const router = useRouter();

  return (
    <div className="w-1/12 max-w-1/12 h-full border-r-2 border-[#e2e0d6] flex flex-col justify-between items-center font-normal">
      <div className="mt-2">
        <BsBook size={40} />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <button
          onClick={() => router.push("/")}
          className="rounded-full p-4 hover:bg-[#ede9df]"
        >
          <BiHomeAlt2 size={30} />
        </button>
        <button className="rounded-full p-4 hover:bg-[#ede9df]">
          <TfiTimer size={30} />
        </button>
        <button className="rounded-full p-4 hover:bg-[#ede9df]">
          <BsBookmark size={30} />
        </button>
        <button className="rounded-full p-4 hover:bg-[#ede9df]">
          <IoSettingsOutline size={30} />
        </button>
      </div>
      <a className="rounded-full p-4 hover:bg-[#ede9df] w-fit cursor-pointer">
        <AiOutlineAlignLeft size={30} />
      </a>
    </div>
  );
}
