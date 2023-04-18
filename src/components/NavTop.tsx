import Image from "next/image";
import storage from "local-storage-fallback";
import { BsSearch } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useEffect, useState } from "react";

export default function NavTop() {
  const [tokenStore, setTokenStore] = useState("");
  useEffect(() => {
    const getToken = storage.getItem("token");
    getToken !== null ? setTokenStore(getToken) : "null";
  }, []);

  return (
    <div className="flex justify-between items-center px-6 w-full">
      <div className="flex items-center w-1/3">
        <button>
          <BsSearch size={25} />
        </button>
        <input
          type="search"
          name=""
          id=""
          className="bg-[#f0eee3] p-4 w-full text-base outline-none border-none ml-2"
          placeholder="Search book name, author, edition ..."
        />
      </div>
      <div className="flex space-x-12">
        <div className="flex items-center justify-center hover:bg-[#ede9df] cursor-pointer px-4 py-2 rounded-full">
          <Image
            src="/BlankAvatar.jpg"
            height={30}
            width={30}
            alt={"Avatar"}
            priority={true}
            className="rounded-full"
          />
          <span className="ml-3 text-base font-semibold">Username</span>
        </div>
        <button className="p-2 hover:bg-[#ede9df] rounded-full">
          <IoMdNotificationsOutline size={30} />
        </button>
      </div>
    </div>
  );
}
