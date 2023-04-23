import { FC } from "react";
import Image from "next/image";
import { User, Key } from "lucide-react";

const Login: FC = ({}) => {
  return (
    <div className="flex items-center justify-around w-full h-full">
      <Image
        src="https://assets.myperfectwords.com/blog/book-review-writing/BookReview.jpg"
        width={600}
        height={600}
        priority={true}
        quality={100}
        alt={"Login image"}
        className="rounded-lg shadow-lg"
      />
      <form
        action="http://localhost:3000/api/auth"
        method="POST"
        className="flex flex-col gap-y-6 text-sm text-gray-900 items-center justify-center"
      >
        <h3 className="uppercase text-2xl text-[#065b97] font-bold tracking-wide mb-2">
          Đăng nhập
        </h3>

        <div className="bg-white flex items-center rounded-lg border-slate-300 border-2 overflow-hidden text-base">
          <div className="p-2">
            <User size={25} />
          </div>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Tài khoản"
            className="bg-white p-2 w-72 h-12 border-l-2 border-slate-300 outline-none"
          />
        </div>

        <div className="bg-white flex items-center rounded-lg border-slate-300 border-2 overflow-hidden text-base">
          <div className="p-2">
            <Key size={25} />
          </div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Mật khẩu"
            className="bg-white p-2 w-72 h-12 border-l-2 border-slate-300 outline-none"
          />
        </div>
        <button
          type="submit"
          className="p-2 bg-[#C9C39F] text-base w-36 rounded-lg mt-2"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
};

export default Login;
