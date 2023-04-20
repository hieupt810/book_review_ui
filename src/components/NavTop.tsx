import Image from "next/image";
import { useRouter } from "next/router";
import { BsSearch } from "react-icons/bs";
import { useState, useEffect } from "react";
import { getCookie, deleteCookie } from "cookies-next";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function NavTop() {
  const router = useRouter();

  const [authCookie, setAuthCookie] = useState("");
  useEffect(() => {
    function getAuthCookie() {
      const getToken = getCookie("token");
      if (typeof getToken === "string") setAuthCookie(getToken);
    }
    getAuthCookie();
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
          placeholder="Tìm sách, tác giả, ..."
        />
      </div>
      <div className="flex space-x-12">
        {authCookie !== "" ? (
          <div
            onClick={() => {
              deleteCookie("token", { path: "" });
              router.reload();
            }}
            className="flex items-center justify-center hover:bg-[#C9C39F] cursor-pointer px-4 py-2 rounded-full"
          >
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
        ) : (
          <div className="flex items-center bg-[#C9C39F] rounded-full">
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="px-4"
            >
              Đăng nhập
            </button>
          </div>
        )}
        <button className="p-2 hover:bg-[#C9C39F] rounded-full">
          <IoMdNotificationsOutline size={30} />
        </button>
      </div>
    </div>
  );
}
