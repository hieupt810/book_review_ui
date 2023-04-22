import { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import { Search, UserIcon } from "lucide-react";

interface NavTopProps {
  user: string;
}

const NavTop: FC<NavTopProps> = ({ user }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mx-2">
      <div className="flex bg-[#f0eee3] text-sm text-gray-900">
        <div className="p-2">
          <Search />
        </div>
        <input
          type="text"
          placeholder="Tìm sách, tác giả, ..."
          className="bg-[#f0eee3] w-52 outline-none"
        />
      </div>

      <div className="flex items-center">
        {user ? (
          <div
            onClick={() => {
              deleteCookie("token");
              deleteCookie("username");
              router.reload();
            }}
            className="p-2 mx-2 bg-[#C9C39F] rounded-lg cursor-pointer flex items-center gap-x-2"
          >
            <div>
              <UserIcon />
            </div>
            <span className="text-gray-900 text-sm">{user}</span>
          </div>
        ) : (
          <Link href="http://localhost:3000/login">
            <button className="px-4 py-2 mx-2 bg-[#C9C39F] rounded-lg">
              Đăng nhập
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavTop;
